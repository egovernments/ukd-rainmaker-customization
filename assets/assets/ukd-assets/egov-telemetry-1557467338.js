! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function i(e, t, n) {
        return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e)););
                return e
            }(e, t);
            if (r) {
                var a = Object.getOwnPropertyDescriptor(r, t);
                return a.get ? a.get.call(n) : a.value
            }
        })(e, t, n || e)
    }

    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && l(e, t)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e
    }

    function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    if (navigator) var p = new(n(7))(navigator.userAgent).getResult();
    var h = function e() {
            d(this, e), this.config = {
                pdata: {
                    id: "",
                    ver: "",
                    pid: ""
                },
                apislug: "",
                env: "Rainmaker",
                channel: "org.egov",
                did: "",
                authtoken: "XXXX",
                uid: m(),
                sid: "",
                batchsize: 10,
                mode: "",
                host: "",
                endpoint: "/v1/telemetry",
                tags: [],
                cdata: []
            }, this.content_id = "1", this.content_ver = "1.0", this.data = {
                type: "",
                mode: "",
                stageid: "",
                duration: "0"
            }, this.options = {
                actor: {
                    id: m()
                }
            }
        },
        f = function e() {
            d(this, e), this.data = {}, this.options = {
                actor: {
                    id: m()
                }
            }
        };

    function m() {
        return localStorage.getItem("user-info") ? JSON.parse(localStorage.getItem("user-info")).uuid : "UserNotFound"
    }
    var g = function() {
            function e() {
                d(this, e), this.telemetries = {}, this.parentTelemetryType = "PARENT_TELEMETRY_TYPE"
            }
            return c(e, [{
                key: "getParentTelemetry",
                value: function() {
                    return this.telemetries[this.parentTelemetryType]
                }
            }, {
                key: "resetTelemetries",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.deleteAll(), t || this.createPageTelemetry(e, this.parentTelemetryType)
                }
            }, {
                key: "createPageTelemetry",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    return this.telemetries[t] = new b(e), void 0 === t && (t = e), this.getTelemetryObject(t).start(), this.telemetries[t]
                }
            }, {
                key: "createFormTelemetry",
                value: function(e, t) {
                    if (!(e in this.telemetries)) return this.telemetries[e] = new w(e, t), this.getTelemetryObject(e).start(), this.telemetries[e]
                }
            }, {
                key: "getFormId",
                value: function(e) {
                    if (-1 !== e.indexOf("-form")) return e.substring(0, e.indexOf("-form"))
                }
            }, {
                key: "isFormInBackground",
                value: function(e) {
                    var t = this.getFormId(e);
                    return !(!t || null !== document.getElementById(t))
                }
            }, {
                key: "pauseBackgroundForms",
                value: function() {
                    for (var e in this.telemetries) this.isFormInBackground(e) && this.getTelemetryObject(e).pause()
                }
            }, {
                key: "getTelemetryObject",
                value: function(e) {
                    return this.telemetries[e]
                }
            }, {
                key: "deleteTelemetry",
                value: function(e) {
                    delete this.telemetries[e]
                }
            }, {
                key: "deleteAll",
                value: function() {
                    for (var e in this.telemetries) this.getTelemetryObject(e).summary(), this.getTelemetryObject(e).end(), this.deleteTelemetry(e)
                }
            }, {
                key: "pauseAll",
                value: function() {
                    for (var e in this.telemetries) this.getTelemetryObject(e).pause()
                }
            }, {
                key: "resumeAll",
                value: function() {
                    for (var e in this.telemetries) this.isFormInBackground(e) || this.getTelemetryObject(e).resume()
                }
            }]), e
        }(),
        y = function() {
            function e() {
                d(this, e), this.startTime = [], this.endTime = [], this.timeSpentArray = [], this.active = !1
            }
            return c(e, [{
                key: "pause",
                value: function() {
                    this.active && (this.endTime.push((new Date).getTime()), this.active = !1)
                }
            }, {
                key: "resume",
                value: function() {
                    this.active || (this.startTime.push((new Date).getTime()), this.active = !0)
                }
            }, {
                key: "generateTimeSpentArray",
                value: function() {
                    this.pause(), this.timeSpentArray = [];
                    try {
                        for (var e = 0; e < this.startTime.length; e++) this.timeSpentArray.push(this.endTime[e] - this.startTime[e])
                    } catch (e) {}
                }
            }, {
                key: "addStartTime",
                value: function(e) {
                    e.startTime = this.startTime[0]
                }
            }, {
                key: "addEndTime",
                value: function(e) {
                    e.endTime = this.endTime[this.endTime.length - 1]
                }
            }, {
                key: "addStartTimeArray",
                value: function(e) {
                    e.startTimeArray = this.startTime
                }
            }, {
                key: "addEndTimeArray",
                value: function(e) {
                    e.endTimeArray = this.endTime
                }
            }, {
                key: "addTimeSpent",
                value: function(e) {
                    this.generateTimeSpentArray(), e.timeSpent = this.timeSpentArray.reduce(function(e, t) {
                        return e + t
                    }, 0)
                }
            }, {
                key: "addTimeSpentArray",
                value: function(e) {
                    this.generateTimeSpentArray(), e.timeSpentArray = this.timeSpentArray
                }
            }, {
                key: "addNumberOfInteractions",
                value: function(e) {
                    this.generateTimeSpentArray(), e.numberOfInteractions = this.timeSpentArray.length
                }
            }, {
                key: "addSummary",
                value: function(e) {
                    this.addStartTimeArray(e), this.addEndTimeArray(e), this.addTimeSpent(e)
                }
            }]), e
        }(),
        v = function() {
            function e(t) {
                d(this, e), this.type = t, this.configData = new h, this.telemetryData = new f, this.timeTracker = new y
            }
            return c(e, [{
                key: "addType",
                value: function(e) {
                    e.type = this.type
                }
            }, {
                key: "addDeviceInfo",
                value: function(e) {
                    navigator && (e.userAgent = navigator.userAgent, p && (e["web-browser"] = p.browser.name, e.platform = p.os.name))
                }
            }, {
                key: "addCityId",
                value: function(e) {
                    localStorage.getItem("user-info") && (e.cityId = JSON.parse(localStorage.getItem("user-info")).permanentCity)
                }
            }, {
                key: "addBaseInfo",
                value: function(e) {
                    this.addType(e), this.addDeviceInfo(e), this.addCityId(e)
                }
            }, {
                key: "addDefaultStartData",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.assign(this.makeCopyOfData(this.configData.data), e)
                }
            }, {
                key: "addDefaultStartOptions",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.assign(this.makeCopyOfData(this.configData.options), e)
                }
            }, {
                key: "addDefaultData",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.assign(this.makeCopyOfData(this.telemetryData.data), e)
                }
            }, {
                key: "addDefaultOptions",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.assign(this.makeCopyOfData(this.telemetryData.options), e)
                }
            }, {
                key: "makeCopyOfData",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return JSON.parse(JSON.stringify(e))
                }
            }, {
                key: "pause",
                value: function() {
                    this.timeTracker.pause()
                }
            }, {
                key: "resume",
                value: function() {
                    this.timeTracker.resume()
                }
            }, {
                key: "start",
                value: function(e, t) {
                    var n = this.addDefaultStartData(e),
                        r = this.addDefaultStartOptions(t);
                    this.addBaseInfo(n), this.timeTracker.resume(), EkTelemetry.start(this.configData.config, this.configData.content_id, this.configData.content_ver, n, r)
                }
            }, {
                key: "summary",
                value: function(e, t) {
                    var n = this.addDefaultData(e),
                        r = this.addDefaultOptions(t);
                    this.addBaseInfo(n), this.timeTracker.pause(), this.timeTracker.addSummary(n), EkTelemetry.summary(n, r)
                }
            }, {
                key: "end",
                value: function(e, t) {
                    var n = this.addDefaultData(e),
                        r = this.addDefaultOptions(r);
                    this.addBaseInfo(n), EkTelemetry.end(n, r)
                }
            }]), e
        }(),
        b = function(e) {
            function t(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "page";
                return d(this, t), (n = a(this, o(t).call(this, r))).url = e, n
            }
            return s(t, v), c(t, [{
                key: "addURL",
                value: function(e) {
                    e.url = this.url
                }
            }, {
                key: "addPageInfo",
                value: function(e) {
                    this.addURL(e)
                }
            }, {
                key: "start",
                value: function(e) {
                    var n = this.makeCopyOfData(e);
                    this.addPageInfo(n), i(o(t.prototype), "start", this).call(this, n)
                }
            }, {
                key: "summary",
                value: function(e) {
                    var n = this.makeCopyOfData(e);
                    this.addPageInfo(n), i(o(t.prototype), "summary", this).call(this, n)
                }
            }, {
                key: "end",
                value: function(e) {
                    var n = this.makeCopyOfData(e);
                    this.addPageInfo(n), i(o(t.prototype), "end", this).call(this, n)
                }
            }]), t
        }(),
        w = function(e) {
            function t(e, n) {
                var r;
                return d(this, t), (r = a(this, o(t).call(this, n, "form"))).formKey = e, r.fields = {}, r
            }
            return s(t, b), c(t, [{
                key: "fieldInteractionStart",
                value: function(e) {
                    this.timeTracker.resume(), e in this.fields || (this.fields[e] = new k(e)), this.fields[e].resume()
                }
            }, {
                key: "fieldInteractionEnded",
                value: function(e, t) {
                    e in this.fields && (this.fields[e].pause(), this.fields[e].fieldDataLength = t)
                }
            }, {
                key: "addFormKey",
                value: function(e) {
                    e.formKey = this.formKey
                }
            }, {
                key: "addFieldSummary",
                value: function(e) {
                    var t = [];
                    for (var n in this.fields) this.fields[n].pause(), t.push(this.fields[n].getSummary());
                    e.fieldSummary = t
                }
            }, {
                key: "submit",
                value: function(e) {
                    (t = this.makeCopyOfData(e)).submit = "true", this.summary(t);
                    var t = this.makeCopyOfData(e);
                    this.end(t)
                }
            }, {
                key: "start",
                value: function(e) {
                    var n = this.makeCopyOfData(e);
                    this.addFormKey(n), i(o(t.prototype), "start", this).call(this, n)
                }
            }, {
                key: "summary",
                value: function(e) {
                    var n = this.makeCopyOfData(e);
                    this.addFormKey(n), this.addFieldSummary(n), i(o(t.prototype), "summary", this).call(this, n)
                }
            }, {
                key: "end",
                value: function(e) {
                    var n = this.makeCopyOfData(e);
                    this.addFormKey(n), i(o(t.prototype), "end", this).call(this, n)
                }
            }]), t
        }(),
        k = function() {
            function e(t) {
                d(this, e), this.fieldKey = t, this.timeTracker = new y, this.fieldDataLength = -1
            }
            return c(e, [{
                key: "addFieldKey",
                value: function(e) {
                    e.fieldKey = this.fieldKey
                }
            }, {
                key: "addFieldDataLength",
                value: function(e) {
                    e.fieldDataLength = this.fieldDataLength
                }
            }, {
                key: "resume",
                value: function() {
                    this.timeTracker.resume()
                }
            }, {
                key: "pause",
                value: function() {
                    this.timeTracker.pause()
                }
            }, {
                key: "getSummary",
                value: function() {
                    var e = {};
                    return this.addFieldKey(e), this.addFieldDataLength(e), this.timeTracker.addTimeSpent(e), this.timeTracker.addNumberOfInteractions(e), e
                }
            }]), e
        }();
    t.a = g
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            n(4);
            var t = n(0);
            n(9);

            function r(e, t) {
                if (null !== e) return e.nodeName === t ? e : r(e.parentElement, t)
            }
            e.jQuery = n(3);
            var a = new t.a;

            function i(e) {
                a.resetTelemetries(e)
            }

            function o(e) {
                var t = e.id;
                return "radio" === e.type && (t = e.name + "-radio"), t
            }

            function s(e) {
                var t = r(e, "FORM");
                if (t) return (t.id || "FormKeyNotSpecified") + "-form"
            }
            window.document.addEventListener("focus", function(e) {
                    a.pauseBackgroundForms();
                    var t = r(e.target, "INPUT");
                    if (t) {
                        var n = o(t),
                            i = s(t);
                        if (i)(function(e) {
                            var t = a.getTelemetryObject(e);
                            return void 0 === t && (t = a.createFormTelemetry(e, window.location.href)), t
                        })(i).fieldInteractionStart(n)
                    }
                }, !0), window.document.addEventListener("blur", function(e) {
                    var t = r(e.target, "INPUT");
                    if (t) {
                        var n = o(t),
                            i = s(t);
                        if (i) {
                            var l = a.getTelemetryObject(i);
                            l && l.fieldInteractionEnded(n, t.value.length)
                        }
                    }
                }, !0), window.addEventListener("submit", function(e) {
                    var t = s(e.target),
                        n = a.getTelemetryObject(t);
                    n && (n.submit(), a.deleteTelemetry(t))
                }), window.addEventListener("load", function(e) {
                    i(window.location.href)
                }), window.addEventListener("beforeunload", function(e) {
                    i()
                }), window.addEventListener("focus", function(e) {
                    a.resumeAll()
                }), window.addEventListener("blur", function(e) {
                    a.pauseAll()
                }), window.addEventListener("popstate", function(e) {
                    i(e.currentTarget.location.href)
                }),
                function(e) {
                    var t = e.pushState;
                    e.pushState = function(n) {
                        "function" == typeof e.onpushstate && e.onpushstate({
                            state: n
                        });
                        var r = arguments[2];
                        return i(window.location.protocol + "//" + window.location.host + r), t.apply(e, arguments)
                    }
                }(window.history)
        }.call(this, n(2))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    ! function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, a) {
        "use strict";
        var i = [],
            o = n.document,
            s = Object.getPrototypeOf,
            l = i.slice,
            u = i.concat,
            c = i.push,
            d = i.indexOf,
            p = {},
            h = p.toString,
            f = p.hasOwnProperty,
            m = f.toString,
            g = m.call(Object),
            y = {},
            v = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            b = function(e) {
                return null != e && e === e.window
            },
            w = {
                type: !0,
                src: !0,
                noModule: !0
            };

        function k(e, t, n) {
            var r, a = (t = t || o).createElement("script");
            if (a.text = e, n)
                for (r in w) n[r] && (a[r] = n[r]);
            t.head.appendChild(a).parentNode.removeChild(a)
        }

        function x(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[h.call(e)] || "object" : typeof e
        }
        var E = function(e, t) {
                return new E.fn.init(e, t)
            },
            P = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function S(e) {
            var t = !!e && "length" in e && e.length,
                n = x(e);
            return !v(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        E.fn = E.prototype = {
            jquery: "3.3.1",
            constructor: E,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(e) {
                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = E.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return E.each(this, e)
            },
            map: function(e) {
                return this.pushStack(E.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: i.sort,
            splice: i.splice
        }, E.extend = E.fn.extend = function() {
            var e, t, n, r, a, i, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || v(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = o[t], o !== (r = e[t]) && (u && r && (E.isPlainObject(r) || (a = Array.isArray(r))) ? (a ? (a = !1, i = n && Array.isArray(n) ? n : []) : i = n && E.isPlainObject(n) ? n : {}, o[t] = E.extend(u, i, r)) : void 0 !== r && (o[t] = r));
            return o
        }, E.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== h.call(e)) && (!(t = s(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && m.call(n) === g)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e) {
                k(e)
            },
            each: function(e, t) {
                var n, r = 0;
                if (S(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(P, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (S(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : d.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, a = e.length; r < n; r++) e[a++] = t[r];
                return e.length = a, e
            },
            grep: function(e, t, n) {
                for (var r = [], a = 0, i = e.length, o = !n; a < i; a++) !t(e[a], a) !== o && r.push(e[a]);
                return r
            },
            map: function(e, t, n) {
                var r, a, i = 0,
                    o = [];
                if (S(e))
                    for (r = e.length; i < r; i++) null != (a = t(e[i], i, n)) && o.push(a);
                else
                    for (i in e) null != (a = t(e[i], i, n)) && o.push(a);
                return u.apply([], o)
            },
            guid: 1,
            support: y
        }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = i[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            p["[object " + t + "]"] = t.toLowerCase()
        });
        var T =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(e) {
                var t, n, r, a, i, o, s, l, u, c, d, p, h, f, m, g, y, v, b, w = "sizzle" + 1 * new Date,
                    k = e.document,
                    x = 0,
                    E = 0,
                    P = oe(),
                    S = oe(),
                    T = oe(),
                    C = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    A = {}.hasOwnProperty,
                    _ = [],
                    D = _.pop,
                    j = _.push,
                    R = _.push,
                    O = _.slice,
                    F = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    $ = "[\\x20\\t\\r\\n\\f]",
                    N = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    L = "\\[" + $ + "*(" + N + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + $ + "*\\]",
                    M = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)",
                    B = new RegExp($ + "+", "g"),
                    H = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
                    q = new RegExp("^" + $ + "*," + $ + "*"),
                    U = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
                    z = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]", "g"),
                    V = new RegExp(M),
                    K = new RegExp("^" + N + "$"),
                    G = {
                        ID: new RegExp("^#(" + N + ")"),
                        CLASS: new RegExp("^\\.(" + N + ")"),
                        TAG: new RegExp("^(" + N + "|[*])"),
                        ATTR: new RegExp("^" + L),
                        PSEUDO: new RegExp("^" + M),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + I + ")$", "i"),
                        needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
                    },
                    W = /^(?:input|select|textarea|button)$/i,
                    X = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Z = /[+~]/,
                    Y = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
                    ee = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function(e, t) {
                        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    re = function() {
                        p()
                    },
                    ae = ve(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    R.apply(_ = O.call(k.childNodes), k.childNodes), _[k.childNodes.length].nodeType
                } catch (e) {
                    R = {
                        apply: _.length ? function(e, t) {
                            j.apply(e, O.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function ie(e, t, r, a) {
                    var i, s, u, c, d, f, y, v = t && t.ownerDocument,
                        x = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return r;
                    if (!a && ((t ? t.ownerDocument || t : k) !== h && p(t), t = t || h, m)) {
                        if (11 !== x && (d = J.exec(e)))
                            if (i = d[1]) {
                                if (9 === x) {
                                    if (!(u = t.getElementById(i))) return r;
                                    if (u.id === i) return r.push(u), r
                                } else if (v && (u = v.getElementById(i)) && b(t, u) && u.id === i) return r.push(u), r
                            } else {
                                if (d[2]) return R.apply(r, t.getElementsByTagName(e)), r;
                                if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return R.apply(r, t.getElementsByClassName(i)), r
                            } if (n.qsa && !T[e + " "] && (!g || !g.test(e))) {
                            if (1 !== x) v = t, y = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = w), s = (f = o(e)).length; s--;) f[s] = "#" + c + " " + ye(f[s]);
                                y = f.join(","), v = Z.test(e) && me(t.parentNode) || t
                            }
                            if (y) try {
                                return R.apply(r, v.querySelectorAll(y)), r
                            } catch (e) {} finally {
                                c === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(H, "$1"), t, r, a)
                }

                function oe() {
                    var e = [];
                    return function t(n, a) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = a
                    }
                }

                function se(e) {
                    return e[w] = !0, e
                }

                function le(e) {
                    var t = h.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ue(e, t) {
                    for (var n = e.split("|"), a = n.length; a--;) r.attrHandle[n[a]] = t
                }

                function ce(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function de(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function pe(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function fe(e) {
                    return se(function(t) {
                        return t = +t, se(function(n, r) {
                            for (var a, i = e([], n.length, t), o = i.length; o--;) n[a = i[o]] && (n[a] = !(r[a] = n[a]))
                        })
                    })
                }

                function me(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ie.support = {}, i = ie.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, p = ie.setDocument = function(e) {
                        var t, a, o = e ? e.ownerDocument || e : k;
                        return o !== h && 9 === o.nodeType && o.documentElement ? (f = (h = o).documentElement, m = !i(h), k !== h && (a = h.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", re, !1) : a.attachEvent && a.attachEvent("onunload", re)), n.attributes = le(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = le(function(e) {
                            return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = Q.test(h.getElementsByClassName), n.getById = le(function(e) {
                            return f.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                        }), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(Y, ee);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(Y, ee);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, r, a, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (a = t.getElementsByName(e), r = 0; i = a[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                a = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[a++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                        }, y = [], g = [], (n.qsa = Q.test(h.querySelectorAll)) && (le(function(e) {
                            f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + $ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + $ + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                        }), le(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = h.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + $ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (n.matchesSelector = Q.test(v = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) {
                            n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", M)
                        }), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), t = Q.test(f.compareDocumentPosition), b = t || Q.test(f.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, C = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === h || e.ownerDocument === k && b(k, e) ? -1 : t === h || t.ownerDocument === k && b(k, t) ? 1 : c ? F(c, e) - F(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, r = 0,
                                a = e.parentNode,
                                i = t.parentNode,
                                o = [e],
                                s = [t];
                            if (!a || !i) return e === h ? -1 : t === h ? 1 : a ? -1 : i ? 1 : c ? F(c, e) - F(c, t) : 0;
                            if (a === i) return ce(e, t);
                            for (n = e; n = n.parentNode;) o.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; o[r] === s[r];) r++;
                            return r ? ce(o[r], s[r]) : o[r] === k ? -1 : s[r] === k ? 1 : 0
                        }, h) : h
                    }, ie.matches = function(e, t) {
                        return ie(e, null, null, t)
                    }, ie.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== h && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && m && !T[t + " "] && (!y || !y.test(t)) && (!g || !g.test(t))) try {
                            var r = v.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {}
                        return ie(t, h, null, [e]).length > 0
                    }, ie.contains = function(e, t) {
                        return (e.ownerDocument || e) !== h && p(e), b(e, t)
                    }, ie.attr = function(e, t) {
                        (e.ownerDocument || e) !== h && p(e);
                        var a = r.attrHandle[t.toLowerCase()],
                            i = a && A.call(r.attrHandle, t.toLowerCase()) ? a(e, t, !m) : void 0;
                        return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, ie.escape = function(e) {
                        return (e + "").replace(te, ne)
                    }, ie.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ie.uniqueSort = function(e) {
                        var t, r = [],
                            a = 0,
                            i = 0;
                        if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(C), d) {
                            for (; t = e[i++];) t === e[i] && (a = r.push(i));
                            for (; a--;) e.splice(r[a], 1)
                        }
                        return c = null, e
                    }, a = ie.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += a(t);
                        return n
                    }, (r = ie.selectors = {
                        cacheLength: 50,
                        createPseudo: se,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(Y, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Y, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(Y, ee).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = P[e + " "];
                                return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && P(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var a = ie.attr(r, e);
                                    return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, a) {
                                var i = "nth" !== e.slice(0, 3),
                                    o = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === a ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, l) {
                                    var u, c, d, p, h, f, m = i !== o ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        y = s && t.nodeName.toLowerCase(),
                                        v = !l && !s,
                                        b = !1;
                                    if (g) {
                                        if (i) {
                                            for (; m;) {
                                                for (p = t; p = p[m];)
                                                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                f = m = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [o ? g.firstChild : g.lastChild], o && v) {
                                            for (b = (h = (u = (c = (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)
                                                if (1 === p.nodeType && ++b && p === t) {
                                                    c[e] = [x, h, b];
                                                    break
                                                }
                                        } else if (v && (b = h = (u = (c = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === b)
                                            for (;
                                                (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && ((c = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [x, b]), p !== t)););
                                        return (b -= a) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, a = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                                return a[w] ? a(t) : a.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                                    for (var r, i = a(e, t), o = i.length; o--;) e[r = F(e, i[o])] = !(n[r] = i[o])
                                }) : function(e) {
                                    return a(e, 0, n)
                                }) : a
                            }
                        },
                        pseudos: {
                            not: se(function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(H, "$1"));
                                return r[w] ? se(function(e, t, n, a) {
                                    for (var i, o = r(e, null, a, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                                }) : function(e, a, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: se(function(e) {
                                return function(t) {
                                    return ie(e, t).length > 0
                                }
                            }),
                            contains: se(function(e) {
                                return e = e.replace(Y, ee),
                                    function(t) {
                                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: se(function(e) {
                                return K.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(Y, ee).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === f
                            },
                            focus: function(e) {
                                return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: he(!1),
                            disabled: he(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return X.test(e.nodeName)
                            },
                            input: function(e) {
                                return W.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: fe(function() {
                                return [0]
                            }),
                            last: fe(function(e, t) {
                                return [t - 1]
                            }),
                            eq: fe(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: fe(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: fe(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: fe(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: fe(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = de(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = pe(t);

                function ge() {}

                function ye(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function ve(e, t, n) {
                    var r = t.dir,
                        a = t.next,
                        i = a || r,
                        o = n && "parentNode" === i,
                        s = E++;
                    return t.first ? function(t, n, a) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) return e(t, n, a);
                        return !1
                    } : function(t, n, l) {
                        var u, c, d, p = [x, s];
                        if (l) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || o)
                                    if (c = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((u = c[i]) && u[0] === x && u[1] === s) return p[2] = u[2];
                                        if (c[i] = p, p[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function be(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var a = e.length; a--;)
                            if (!e[a](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function we(e, t, n, r, a) {
                    for (var i, o = [], s = 0, l = e.length, u = null != t; s < l; s++)(i = e[s]) && (n && !n(i, r, a) || (o.push(i), u && t.push(s)));
                    return o
                }

                function ke(e, t, n, r, a, i) {
                    return r && !r[w] && (r = ke(r)), a && !a[w] && (a = ke(a, i)), se(function(i, o, s, l) {
                        var u, c, d, p = [],
                            h = [],
                            f = o.length,
                            m = i || function(e, t, n) {
                                for (var r = 0, a = t.length; r < a; r++) ie(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            g = !e || !i && t ? m : we(m, p, e, s, l),
                            y = n ? a || (i ? e : f || r) ? [] : o : g;
                        if (n && n(g, y, s, l), r)
                            for (u = we(y, h), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (y[h[c]] = !(g[h[c]] = d));
                        if (i) {
                            if (a || e) {
                                if (a) {
                                    for (u = [], c = y.length; c--;)(d = y[c]) && u.push(g[c] = d);
                                    a(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(d = y[c]) && (u = a ? F(i, d) : p[c]) > -1 && (i[u] = !(o[u] = d))
                            }
                        } else y = we(y === o ? y.splice(f, y.length) : y), a ? a(null, o, y, l) : R.apply(o, y)
                    })
                }

                function xe(e) {
                    for (var t, n, a, i = e.length, o = r.relative[e[0].type], s = o || r.relative[" "], l = o ? 1 : 0, c = ve(function(e) {
                            return e === t
                        }, s, !0), d = ve(function(e) {
                            return F(t, e) > -1
                        }, s, !0), p = [function(e, n, r) {
                            var a = !o && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                            return t = null, a
                        }]; l < i; l++)
                        if (n = r.relative[e[l].type]) p = [ve(be(p), n)];
                        else {
                            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                for (a = ++l; a < i && !r.relative[e[a].type]; a++);
                                return ke(l > 1 && be(p), l > 1 && ye(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(H, "$1"), n, l < a && xe(e.slice(l, a)), a < i && xe(e = e.slice(a)), a < i && ye(e))
                            }
                            p.push(n)
                        } return be(p)
                }
                return ge.prototype = r.filters = r.pseudos, r.setFilters = new ge, o = ie.tokenize = function(e, t) {
                    var n, a, i, o, s, l, u, c = S[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], u = r.preFilter; s;) {
                        for (o in n && !(a = q.exec(s)) || (a && (s = s.slice(a[0].length) || s), l.push(i = [])), n = !1, (a = U.exec(s)) && (n = a.shift(), i.push({
                                value: n,
                                type: a[0].replace(H, " ")
                            }), s = s.slice(n.length)), r.filter) !(a = G[o].exec(s)) || u[o] && !(a = u[o](a)) || (n = a.shift(), i.push({
                            value: n,
                            type: o,
                            matches: a
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? ie.error(e) : S(e, l).slice(0)
                }, s = ie.compile = function(e, t) {
                    var n, a = [],
                        i = [],
                        s = T[e + " "];
                    if (!s) {
                        for (t || (t = o(e)), n = t.length; n--;)(s = xe(t[n]))[w] ? a.push(s) : i.push(s);
                        (s = T(e, function(e, t) {
                            var n = t.length > 0,
                                a = e.length > 0,
                                i = function(i, o, s, l, c) {
                                    var d, f, g, y = 0,
                                        v = "0",
                                        b = i && [],
                                        w = [],
                                        k = u,
                                        E = i || a && r.find.TAG("*", c),
                                        P = x += null == k ? 1 : Math.random() || .1,
                                        S = E.length;
                                    for (c && (u = o === h || o || c); v !== S && null != (d = E[v]); v++) {
                                        if (a && d) {
                                            for (f = 0, o || d.ownerDocument === h || (p(d), s = !m); g = e[f++];)
                                                if (g(d, o || h, s)) {
                                                    l.push(d);
                                                    break
                                                } c && (x = P)
                                        }
                                        n && ((d = !g && d) && y--, i && b.push(d))
                                    }
                                    if (y += v, n && v !== y) {
                                        for (f = 0; g = t[f++];) g(b, w, o, s);
                                        if (i) {
                                            if (y > 0)
                                                for (; v--;) b[v] || w[v] || (w[v] = D.call(l));
                                            w = we(w)
                                        }
                                        R.apply(l, w), c && !i && w.length > 0 && y + t.length > 1 && ie.uniqueSort(l)
                                    }
                                    return c && (x = P, u = k), b
                                };
                            return n ? se(i) : i
                        }(i, a))).selector = e
                    }
                    return s
                }, l = ie.select = function(e, t, n, a) {
                    var i, l, u, c, d, p = "function" == typeof e && e,
                        h = !a && o(e = p.selector || e);
                    if (n = n || [], 1 === h.length) {
                        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && r.relative[l[1].type]) {
                            if (!(t = (r.find.ID(u.matches[0].replace(Y, ee), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (i = G.needsContext.test(e) ? 0 : l.length; i-- && (u = l[i], !r.relative[c = u.type]);)
                            if ((d = r.find[c]) && (a = d(u.matches[0].replace(Y, ee), Z.test(l[0].type) && me(t.parentNode) || t))) {
                                if (l.splice(i, 1), !(e = a.length && ye(l))) return R.apply(n, a), n;
                                break
                            }
                    }
                    return (p || s(e, h))(a, t, !m, n, !t || Z.test(e) && me(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(C).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = le(function(e) {
                    return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
                }), le(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || ue("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && le(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || ue("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), le(function(e) {
                    return null == e.getAttribute("disabled")
                }) || ue(I, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), ie
            }(n);
        E.find = T, E.expr = T.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = T.uniqueSort, E.text = T.getText, E.isXMLDoc = T.isXML, E.contains = T.contains, E.escapeSelector = T.escape;
        var C = function(e, t, n) {
                for (var r = [], a = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (a && E(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            A = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            _ = E.expr.match.needsContext;

        function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function R(e, t, n) {
            return v(t) ? E.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? E.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? E.grep(e, function(e) {
                return d.call(t, e) > -1 !== n
            }) : E.filter(t, e, n)
        }
        E.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, E.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    a = this;
                if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(a[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, a[t], n);
                return r > 1 ? E.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(R(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(R(this, e || [], !0))
            },
            is: function(e) {
                return !!R(this, "string" == typeof e && _.test(e) ? E(e) : e || [], !1).length
            }
        });
        var O, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function(e, t, n) {
            var r, a;
            if (!e) return this;
            if (n = n || O, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : F.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), j.test(r[1]) && E.isPlainObject(t))
                        for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (a = o.getElementById(r[2])) && (this[0] = a, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
        }).prototype = E.fn, O = E(o);
        var I = /^(?:parents|prev(?:Until|All))/,
            $ = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function N(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        E.fn.extend({
            has: function(e) {
                var t = E(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (E.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    a = this.length,
                    i = [],
                    o = "string" != typeof e && E(e);
                if (!_.test(e))
                    for (; r < a; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            } return this.pushStack(i.length > 1 ? E.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? d.call(E(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), E.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return C(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return C(e, "parentNode", n)
            },
            next: function(e) {
                return N(e, "nextSibling")
            },
            prev: function(e) {
                return N(e, "previousSibling")
            },
            nextAll: function(e) {
                return C(e, "nextSibling")
            },
            prevAll: function(e) {
                return C(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return C(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return C(e, "previousSibling", n)
            },
            siblings: function(e) {
                return A((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return A(e.firstChild)
            },
            contents: function(e) {
                return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
            }
        }, function(e, t) {
            E.fn[e] = function(n, r) {
                var a = E.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = E.filter(r, a)), this.length > 1 && ($[e] || E.uniqueSort(a), I.test(e) && a.reverse()), this.pushStack(a)
            }
        });
        var L = /[^\x20\t\r\n\f]+/g;

        function M(e) {
            return e
        }

        function B(e) {
            throw e
        }

        function H(e, t, n, r) {
            var a;
            try {
                e && v(a = e.promise) ? a.call(e).done(t).fail(n) : e && v(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        E.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return E.each(e.match(L) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : E.extend({}, e);
            var t, n, r, a, i = [],
                o = [],
                s = -1,
                l = function() {
                    for (a = a || e.once, r = t = !0; o.length; s = -1)
                        for (n = o.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                    e.memory || (n = !1), t = !1, a && (i = n ? [] : "")
                },
                u = {
                    add: function() {
                        return i && (n && !t && (s = i.length - 1, o.push(n)), function t(n) {
                            E.each(n, function(n, r) {
                                v(r) ? e.unique && u.has(r) || i.push(r) : r && r.length && "string" !== x(r) && t(r)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function() {
                        return E.each(arguments, function(e, t) {
                            for (var n;
                                (n = E.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? E.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []), this
                    },
                    disable: function() {
                        return a = o = [], i = n = "", this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return a = o = [], n || t || (i = n = ""), this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, n) {
                        return a || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return u
        }, E.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    a = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return a.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return E.Deferred(function(n) {
                                E.each(t, function(t, r) {
                                    var a = v(e[r[4]]) && e[r[4]];
                                    i[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, r, a) {
                            var i = 0;

                            function o(e, t, r, a) {
                                return function() {
                                    var s = this,
                                        l = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(e < i)) {
                                                if ((n = r.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, v(u) ? a ? u.call(n, o(i, t, M, a), o(i, t, B, a)) : (i++, u.call(n, o(i, t, M, a), o(i, t, B, a), o(i, t, M, t.notifyWith))) : (r !== M && (s = void 0, l = [n]), (a || t.resolveWith)(s, l))
                                            }
                                        },
                                        c = a ? u : function() {
                                            try {
                                                u()
                                            } catch (n) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= i && (r !== B && (s = void 0, l = [n]), t.rejectWith(s, l))
                                            }
                                        };
                                    e ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            return E.Deferred(function(n) {
                                t[0][3].add(o(0, n, v(a) ? a : M, n.notifyWith)), t[1][3].add(o(0, n, v(e) ? e : M)), t[2][3].add(o(0, n, v(r) ? r : B))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? E.extend(e, a) : a
                        }
                    },
                    i = {};
                return E.each(t, function(e, n) {
                    var o = n[2],
                        s = n[5];
                    a[n[1]] = o.add, s && o.add(function() {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[n[0] + "With"] = o.fireWith
                }), a.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    a = l.call(arguments),
                    i = E.Deferred(),
                    o = function(e) {
                        return function(n) {
                            r[e] = this, a[e] = arguments.length > 1 ? l.call(arguments) : n, --t || i.resolveWith(r, a)
                        }
                    };
                if (t <= 1 && (H(e, i.done(o(n)).resolve, i.reject, !t), "pending" === i.state() || v(a[n] && a[n].then))) return i.then();
                for (; n--;) H(a[n], o(n), i.reject);
                return i.promise()
            }
        });
        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && q.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, E.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var U = E.Deferred();

        function z() {
            o.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), E.ready()
        }
        E.fn.ready = function(e) {
            return U.then(e).catch(function(e) {
                E.readyException(e)
            }), this
        }, E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || U.resolveWith(o, [E]))
            }
        }), E.ready.then = U.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(E.ready) : (o.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
        var V = function(e, t, n, r, a, i, o) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === x(n))
                    for (s in a = !0, n) V(e, t, s, n[s], !0, i, o);
                else if (void 0 !== r && (a = !0, v(r) || (o = !0), u && (o ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(E(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
                return a ? e : u ? t.call(e) : l ? t(e[0], n) : i
            },
            K = /^-ms-/,
            G = /-([a-z])/g;

        function W(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(K, "ms-").replace(G, W)
        }
        var Q = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function J() {
            this.expando = E.expando + J.uid++
        }
        J.uid = 1, J.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, a = this.cache(e);
                if ("string" == typeof t) a[X(t)] = n;
                else
                    for (r in t) a[X(r)] = t[r];
                return a
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(L) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t)
            }
        };
        var Z = new J,
            Y = new J,
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;

        function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Y.set(e, t, n)
                } else n = void 0;
            return n
        }
        E.extend({
            hasData: function(e) {
                return Y.hasData(e) || Z.hasData(e)
            },
            data: function(e, t, n) {
                return Y.access(e, t, n)
            },
            removeData: function(e, t) {
                Y.remove(e, t)
            },
            _data: function(e, t, n) {
                return Z.access(e, t, n)
            },
            _removeData: function(e, t) {
                Z.remove(e, t)
            }
        }), E.fn.extend({
            data: function(e, t) {
                var n, r, a, i = this[0],
                    o = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (a = Y.get(i), 1 === i.nodeType && !Z.get(i, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && 0 === (r = o[n].name).indexOf("data-") && (r = X(r.slice(5)), ne(i, r, a[r]));
                        Z.set(i, "hasDataAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof e ? this.each(function() {
                    Y.set(this, e)
                }) : V(this, function(t) {
                    var n;
                    if (i && void 0 === t) return void 0 !== (n = Y.get(i, e)) ? n : void 0 !== (n = ne(i, e)) ? n : void 0;
                    this.each(function() {
                        Y.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Y.remove(this, e)
                })
            }
        }), E.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, E.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    r = n.length,
                    a = n.shift(),
                    i = E._queueHooks(e, t);
                "inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete i.stop, a.call(e, function() {
                    E.dequeue(e, t)
                }, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Z.get(e, n) || Z.access(e, n, {
                    empty: E.Callbacks("once memory").add(function() {
                        Z.remove(e, [t + "queue", n])
                    })
                })
            }
        }), E.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = E.queue(this, e, t);
                    E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    E.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    a = E.Deferred(),
                    i = this,
                    o = this.length,
                    s = function() {
                        --r || a.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = Z.get(i[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), a.promise(t)
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ae = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            oe = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && E.contains(e.ownerDocument, e) && "none" === E.css(e, "display")
            },
            se = function(e, t, n, r) {
                var a, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in a = n.apply(e, r || []), t) e.style[i] = o[i];
                return a
            };

        function le(e, t, n, r) {
            var a, i, o = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return E.css(e, t, "")
                },
                l = s(),
                u = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                c = (E.cssNumber[t] || "px" !== u && +l) && ae.exec(E.css(e, t));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; o--;) E.style(e, t, c + u), (1 - i) * (1 - (i = s() / l || .5)) <= 0 && (o = 0), c /= i;
                c *= 2, E.style(e, t, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, a = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = a)), a
        }
        var ue = {};

        function ce(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                a = ue[r];
            return a || (t = n.body.appendChild(n.createElement(r)), a = E.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), ue[r] = a, a)
        }

        function de(e, t) {
            for (var n, r, a = [], i = 0, o = e.length; i < o; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (a[i] = Z.get(r, "display") || null, a[i] || (r.style.display = "")), "" === r.style.display && oe(r) && (a[i] = ce(r))) : "none" !== n && (a[i] = "none", Z.set(r, "display", n)));
            for (i = 0; i < o; i++) null != a[i] && (e[i].style.display = a[i]);
            return e
        }
        E.fn.extend({
            show: function() {
                return de(this, !0)
            },
            hide: function() {
                return de(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    oe(this) ? E(this).show() : E(this).hide()
                })
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
            he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            fe = /^$|^module$|\/(?:java|ecma)script/i,
            me = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function ge(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? E.merge([e], n) : n
        }

        function ye(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
        }
        me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
        var ve = /<|&#?\w+;/;

        function be(e, t, n, r, a) {
            for (var i, o, s, l, u, c, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
                if ((i = e[h]) || 0 === i)
                    if ("object" === x(i)) E.merge(p, i.nodeType ? [i] : i);
                    else if (ve.test(i)) {
                for (o = o || d.appendChild(t.createElement("div")), s = (he.exec(i) || ["", ""])[1].toLowerCase(), l = me[s] || me._default, o.innerHTML = l[1] + E.htmlPrefilter(i) + l[2], c = l[0]; c--;) o = o.lastChild;
                E.merge(p, o.childNodes), (o = d.firstChild).textContent = ""
            } else p.push(t.createTextNode(i));
            for (d.textContent = "", h = 0; i = p[h++];)
                if (r && E.inArray(i, r) > -1) a && a.push(i);
                else if (u = E.contains(i.ownerDocument, i), o = ge(d.appendChild(i), "script"), u && ye(o), n)
                for (c = 0; i = o[c++];) fe.test(i.type || "") && n.push(i);
            return d
        }! function() {
            var e = o.createDocumentFragment().appendChild(o.createElement("div")),
                t = o.createElement("input");
            t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var we = o.documentElement,
            ke = /^key/,
            xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ee = /^([^.]*)(?:\.(.+)|)/;

        function Pe() {
            return !0
        }

        function Se() {
            return !1
        }

        function Te() {
            try {
                return o.activeElement
            } catch (e) {}
        }

        function Ce(e, t, n, r, a, i) {
            var o, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ce(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), !1 === a) a = Se;
            else if (!a) return e;
            return 1 === i && (o = a, (a = function(e) {
                return E().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = E.guid++)), e.each(function() {
                E.event.add(this, t, a, r, n)
            })
        }
        E.event = {
            global: {},
            add: function(e, t, n, r, a) {
                var i, o, s, l, u, c, d, p, h, f, m, g = Z.get(e);
                if (g)
                    for (n.handler && (n = (i = n).handler, a = i.selector), a && E.find.matchesSelector(we, a), n.guid || (n.guid = E.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
                            return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                        }), u = (t = (t || "").match(L) || [""]).length; u--;) h = m = (s = Ee.exec(t[u]) || [])[1], f = (s[2] || "").split(".").sort(), h && (d = E.event.special[h] || {}, h = (a ? d.delegateType : d.bindType) || h, d = E.event.special[h] || {}, c = E.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && E.expr.match.needsContext.test(a),
                        namespace: f.join(".")
                    }, i), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, f, o) || e.addEventListener && e.addEventListener(h, o)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), a ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[h] = !0)
            },
            remove: function(e, t, n, r, a) {
                var i, o, s, l, u, c, d, p, h, f, m, g = Z.hasData(e) && Z.get(e);
                if (g && (l = g.events)) {
                    for (u = (t = (t || "").match(L) || [""]).length; u--;)
                        if (h = m = (s = Ee.exec(t[u]) || [])[1], f = (s[2] || "").split(".").sort(), h) {
                            for (d = E.event.special[h] || {}, p = l[h = (r ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = i = p.length; i--;) c = p[i], !a && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                            o && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || E.removeEvent(e, h, g.handle), delete l[h])
                        } else
                            for (h in l) E.event.remove(e, h + t[u], n, r, !0);
                    E.isEmptyObject(l) && Z.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, a, i, o, s = E.event.fix(e),
                    l = new Array(arguments.length),
                    u = (Z.get(this, "events") || {})[s.type] || [],
                    c = E.event.special[s.type] || {};
                for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (o = E.event.handlers.call(this, s, u), t = 0;
                        (a = o[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = a.elem, n = 0;
                            (i = a.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((E.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, r, a, i, o, s = [],
                    l = t.delegateCount,
                    u = e.target;
                if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (i = [], o = {}, n = 0; n < l; n++) void 0 === o[a = (r = t[n]).selector + " "] && (o[a] = r.needsContext ? E(a, this).index(u) > -1 : E.find(a, this, null, [u]).length), o[a] && i.push(r);
                            i.length && s.push({
                                elem: u,
                                handlers: i
                            })
                        } return u = this, l < t.length && s.push({
                    elem: u,
                    handlers: t.slice(l)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(E.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: v(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[E.expando] ? e : new E.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== Te() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Te() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return D(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, E.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, E.Event = function(e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Pe : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
        }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Se,
            isPropagationStopped: Se,
            isImmediatePropagationStopped: Se,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Pe, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Pe, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Pe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, E.each({
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
            which: function(e) {
                var t = e.button;
                return null == e.which && ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, E.event.addProp), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            E.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = e.relatedTarget,
                        a = e.handleObj;
                    return r && (r === this || E.contains(this, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), E.fn.extend({
            on: function(e, t, n, r) {
                return Ce(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ce(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, a;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, t, e[a]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                    E.event.remove(this, e, n, t)
                })
            }
        });
        var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            _e = /<script|<style|<link/i,
            De = /checked\s*(?:[^=]|=\s*.checked.)/i,
            je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Re(e, t) {
            return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
        }

        function Oe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Fe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Ie(e, t) {
            var n, r, a, i, o, s, l, u;
            if (1 === t.nodeType) {
                if (Z.hasData(e) && (i = Z.access(e), o = Z.set(t, i), u = i.events))
                    for (a in delete o.handle, o.events = {}, u)
                        for (n = 0, r = u[a].length; n < r; n++) E.event.add(t, a, u[a][n]);
                Y.hasData(e) && (s = Y.access(e), l = E.extend({}, s), Y.set(t, l))
            }
        }

        function $e(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function Ne(e, t, n, r) {
            t = u.apply([], t);
            var a, i, o, s, l, c, d = 0,
                p = e.length,
                h = p - 1,
                f = t[0],
                m = v(f);
            if (m || p > 1 && "string" == typeof f && !y.checkClone && De.test(f)) return e.each(function(a) {
                var i = e.eq(a);
                m && (t[0] = f.call(this, a, i.html())), Ne(i, t, n, r)
            });
            if (p && (i = (a = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === a.childNodes.length && (a = i), i || r)) {
                for (s = (o = E.map(ge(a, "script"), Oe)).length; d < p; d++) l = a, d !== h && (l = E.clone(l, !0, !0), s && E.merge(o, ge(l, "script"))), n.call(e[d], l, d);
                if (s)
                    for (c = o[o.length - 1].ownerDocument, E.map(o, Fe), d = 0; d < s; d++) l = o[d], fe.test(l.type || "") && !Z.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && E._evalUrl(l.src) : k(l.textContent.replace(je, ""), c, l))
            }
            return e
        }

        function Le(e, t, n) {
            for (var r, a = t ? E.filter(t, e) : e, i = 0; null != (r = a[i]); i++) n || 1 !== r.nodeType || E.cleanData(ge(r)), r.parentNode && (n && E.contains(r.ownerDocument, r) && ye(ge(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        E.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ae, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, a, i, o, s = e.cloneNode(!0),
                    l = E.contains(e.ownerDocument, e);
                if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                    for (o = ge(s), r = 0, a = (i = ge(e)).length; r < a; r++) $e(i[r], o[r]);
                if (t)
                    if (n)
                        for (i = i || ge(e), o = o || ge(s), r = 0, a = i.length; r < a; r++) Ie(i[r], o[r]);
                    else Ie(e, s);
                return (o = ge(s, "script")).length > 0 && ye(o, !l && ge(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, r, a = E.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (Q(n)) {
                        if (t = n[Z.expando]) {
                            if (t.events)
                                for (r in t.events) a[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                            n[Z.expando] = void 0
                        }
                        n[Y.expando] && (n[Y.expando] = void 0)
                    }
            }
        }), E.fn.extend({
            detach: function(e) {
                return Le(this, e, !0)
            },
            remove: function(e) {
                return Le(this, e)
            },
            text: function(e) {
                return V(this, function(e) {
                    return void 0 === e ? E.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Ne(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Ne(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Re(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Ne(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Ne(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ge(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return E.clone(this, e, t)
                })
            },
            html: function(e) {
                return V(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !_e.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = E.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Ne(this, arguments, function(t) {
                    var n = this.parentNode;
                    E.inArray(this, e) < 0 && (E.cleanData(ge(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            E.fn[e] = function(e) {
                for (var n, r = [], a = E(e), i = a.length - 1, o = 0; o <= i; o++) n = o === i ? this : this.clone(!0), E(a[o])[t](n), c.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Be = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            He = new RegExp(ie.join("|"), "i");

        function qe(e, t, n) {
            var r, a, i, o, s = e.style;
            return (n = n || Be(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || E.contains(e.ownerDocument, e) || (o = E.style(e, t)), !y.pixelBoxStyles() && Me.test(o) && He.test(t) && (r = s.width, a = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = a, s.maxWidth = i)), void 0 !== o ? o + "" : o
        }

        function Ue(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", we.appendChild(u).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), a = 36 === t(e.width), c.style.position = "absolute", i = 36 === c.offsetWidth || "absolute", we.removeChild(u), c = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, a, i, s, l, u = o.createElement("div"),
                c = o.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === c.style.backgroundClip, E.extend(y, {
                boxSizingReliable: function() {
                    return e(), a
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), l
                },
                scrollboxSize: function() {
                    return e(), i
                }
            }))
        }();
        var ze = /^(none|table(?!-c[ea]).+)/,
            Ve = /^--/,
            Ke = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ge = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            We = ["Webkit", "Moz", "ms"],
            Xe = o.createElement("div").style;

        function Qe(e) {
            var t = E.cssProps[e];
            return t || (t = E.cssProps[e] = function(e) {
                if (e in Xe) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
                    if ((e = We[n] + t) in Xe) return e
            }(e) || e), t
        }

        function Je(e, t, n) {
            var r = ae.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Ze(e, t, n, r, a, i) {
            var o = "width" === t ? 1 : 0,
                s = 0,
                l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; o < 4; o += 2) "margin" === n && (l += E.css(e, n + ie[o], !0, a)), r ? ("content" === n && (l -= E.css(e, "padding" + ie[o], !0, a)), "margin" !== n && (l -= E.css(e, "border" + ie[o] + "Width", !0, a))) : (l += E.css(e, "padding" + ie[o], !0, a), "padding" !== n ? l += E.css(e, "border" + ie[o] + "Width", !0, a) : s += E.css(e, "border" + ie[o] + "Width", !0, a));
            return !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - .5))), l
        }

        function Ye(e, t, n) {
            var r = Be(e),
                a = qe(e, t, r),
                i = "border-box" === E.css(e, "boxSizing", !1, r),
                o = i;
            if (Me.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return o = o && (y.boxSizingReliable() || a === e.style[t]), ("auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && (a = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (a = parseFloat(a) || 0) + Ze(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        }

        function et(e, t, n, r, a) {
            return new et.prototype.init(e, t, n, r, a)
        }
        E.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = qe(e, "opacity");
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
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, i, o, s = X(t),
                        l = Ve.test(t),
                        u = e.style;
                    if (l || (t = Qe(s)), o = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (a = o.get(e, !1, r)) ? a : u[t];
                    "string" === (i = typeof n) && (a = ae.exec(n)) && a[1] && (n = le(e, t, a), i = "number"), null != n && n == n && ("number" === i && (n += a && a[3] || (E.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var a, i, o, s = X(t);
                return Ve.test(t) || (t = Qe(s)), (o = E.cssHooks[t] || E.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = qe(e, t, r)), "normal" === a && t in Ge && (a = Ge[t]), "" === n || n ? (i = parseFloat(a), !0 === n || isFinite(i) ? i || 0 : a) : a
            }
        }), E.each(["height", "width"], function(e, t) {
            E.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !ze.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ye(e, t, r) : se(e, Ke, function() {
                        return Ye(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var a, i = Be(e),
                        o = "border-box" === E.css(e, "boxSizing", !1, i),
                        s = r && Ze(e, t, r, o, i);
                    return o && y.scrollboxSize() === i.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Ze(e, t, "border", !1, i) - .5)), s && (a = ae.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = E.css(e, t)), Je(0, n, s)
                }
            }
        }), E.cssHooks.marginLeft = Ue(y.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            E.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, a = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) a[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return a
                }
            }, "margin" !== e && (E.cssHooks[e + t].set = Je)
        }), E.fn.extend({
            css: function(e, t) {
                return V(this, function(e, t, n) {
                    var r, a, i = {},
                        o = 0;
                    if (Array.isArray(t)) {
                        for (r = Be(e), a = t.length; o < a; o++) i[t[o]] = E.css(e, t[o], !1, r);
                        return i
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), E.Tween = et, et.prototype = {
            constructor: et,
            init: function(e, t, n, r, a, i) {
                this.elem = e, this.prop = n, this.easing = a || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (E.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = et.propHooks[this.prop];
                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
            }
        }, et.prototype.init.prototype = et.prototype, et.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[E.cssProps[e.prop]] && !E.cssHooks[e.prop] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, E.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, E.fx = et.prototype.init, E.fx.step = {};
        var tt, nt, rt = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;

        function it() {
            nt && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(it) : n.setTimeout(it, E.fx.interval), E.fx.tick())
        }

        function ot() {
            return n.setTimeout(function() {
                tt = void 0
            }), tt = Date.now()
        }

        function st(e, t) {
            var n, r = 0,
                a = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) a["margin" + (n = ie[r])] = a["padding" + n] = e;
            return t && (a.opacity = a.width = e), a
        }

        function lt(e, t, n) {
            for (var r, a = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), i = 0, o = a.length; i < o; i++)
                if (r = a[i].call(n, t, e)) return r
        }

        function ut(e, t, n) {
            var r, a, i = 0,
                o = ut.prefilters.length,
                s = E.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (a) return !1;
                    for (var t = tt || ot(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) u.tweens[i].run(r);
                    return s.notifyWith(e, [u, r, n]), r < 1 && o ? n : (o || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: E.extend({}, t),
                    opts: E.extend(!0, {
                        specialEasing: {},
                        easing: E.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: tt || ot(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = E.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? u.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; n < r; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (! function(e, t) {
                    var n, r, a, i, o;
                    for (n in e)
                        if (a = t[r = X(n)], i = e[n], Array.isArray(i) && (a = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (o = E.cssHooks[r]) && "expand" in o)
                            for (n in i = o.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = a);
                        else t[r] = a
                }(c, u.opts.specialEasing); i < o; i++)
                if (r = ut.prefilters[i].call(u, e, c, u.opts)) return v(r.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
            return E.map(c, lt, u), v(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), E.fx.timer(E.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        E.Animation = E.extend(ut, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return le(n.elem, e, ae.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    v(e) ? (t = e, e = ["*"]) : e = e.match(L);
                    for (var n, r = 0, a = e.length; r < a; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, a, i, o, s, l, u, c, d = "width" in t || "height" in t,
                        p = this,
                        h = {},
                        f = e.style,
                        m = e.nodeType && oe(e),
                        g = Z.get(e, "fxshow");
                    for (r in n.queue || (null == (o = E._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
                            o.unqueued || s()
                        }), o.unqueued++, p.always(function() {
                            p.always(function() {
                                o.unqueued--, E.queue(e, "fx").length || o.empty.fire()
                            })
                        })), t)
                        if (a = t[r], rt.test(a)) {
                            if (delete t[r], i = i || "toggle" === a, a === (m ? "hide" : "show")) {
                                if ("show" !== a || !g || void 0 === g[r]) continue;
                                m = !0
                            }
                            h[r] = g && g[r] || E.style(e, r)
                        } if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                        for (r in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = g && g.display) && (u = Z.get(e, "display")), "none" === (c = E.css(e, "display")) && (u ? c = u : (de([e], !0), u = e.style.display || u, c = E.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === E.css(e, "float") && (l || (p.done(function() {
                                f.display = u
                            }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function() {
                                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                            })), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = Z.access(e, "fxshow", {
                            display: u
                        }), i && (g.hidden = !m), m && de([e], !0), p.done(function() {
                            for (r in m || de([e]), Z.remove(e, "fxshow"), h) E.style(e, r, h[r])
                        })), l = lt(m ? g[r] : 0, r, p), r in g || (g[r] = l.start, m && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                }
            }), E.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? E.extend({}, e) : {
                    complete: n || !n && t || v(e) && e,
                    duration: e,
                    easing: n && t || t && !v(t) && t
                };
                return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    v(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
                }, r
            }, E.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(oe).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var a = E.isEmptyObject(e),
                        i = E.speed(t, n, r),
                        o = function() {
                            var t = ut(this, E.extend({}, e), i);
                            (a || Z.get(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, a || !1 === i.queue ? this.each(o) : this.queue(i.queue, o)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            a = null != e && e + "queueHooks",
                            i = E.timers,
                            o = Z.get(this);
                        if (a) o[a] && o[a].stop && r(o[a]);
                        else
                            for (a in o) o[a] && o[a].stop && at.test(a) && r(o[a]);
                        for (a = i.length; a--;) i[a].elem !== this || null != e && i[a].queue !== e || (i[a].anim.stop(n), t = !1, i.splice(a, 1));
                        !t && n || E.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = Z.get(this),
                            r = n[e + "queue"],
                            a = n[e + "queueHooks"],
                            i = E.timers,
                            o = r ? r.length : 0;
                        for (n.finish = !0, E.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), E.each(["toggle", "show", "hide"], function(e, t) {
                var n = E.fn[t];
                E.fn[t] = function(e, r, a) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, a)
                }
            }), E.each({
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                E.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), E.timers = [], E.fx.tick = function() {
                var e, t = 0,
                    n = E.timers;
                for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || E.fx.stop(), tt = void 0
            }, E.fx.timer = function(e) {
                E.timers.push(e), E.fx.start()
            }, E.fx.interval = 13, E.fx.start = function() {
                nt || (nt = !0, it())
            }, E.fx.stop = function() {
                nt = null
            }, E.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, E.fn.delay = function(e, t) {
                return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, r) {
                    var a = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(a)
                    }
                })
            },
            function() {
                var e = o.createElement("input"),
                    t = o.createElement("select").appendChild(o.createElement("option"));
                e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = o.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value
            }();
        var ct, dt = E.expr.attrHandle;
        E.fn.extend({
            attr: function(e, t) {
                return V(this, E.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    E.removeAttr(this, e)
                })
            }
        }), E.extend({
            attr: function(e, t, n) {
                var r, a, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === i && E.isXMLDoc(e) || (a = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (r = a.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && "radio" === t && D(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    a = t && t.match(L);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++];) e.removeAttribute(n)
            }
        }), ct = {
            set: function(e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || E.find.attr;
            dt[t] = function(e, t, r) {
                var a, i, o = t.toLowerCase();
                return r || (i = dt[o], dt[o] = a, a = null != n(e, t, r) ? o : null, dt[o] = i), a
            }
        });
        var pt = /^(?:input|select|textarea|button)$/i,
            ht = /^(?:a|area)$/i;

        function ft(e) {
            return (e.match(L) || []).join(" ")
        }

        function mt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function gt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
        }
        E.fn.extend({
            prop: function(e, t) {
                return V(this, E.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[E.propFix[e] || e]
                })
            }
        }), E.extend({
            prop: function(e, t, n) {
                var r, a, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && E.isXMLDoc(e) || (t = E.propFix[t] || t, a = E.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), y.optSelected || (E.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            E.propFix[this.toLowerCase()] = this
        }), E.fn.extend({
            addClass: function(e) {
                var t, n, r, a, i, o, s, l = 0;
                if (v(e)) return this.each(function(t) {
                    E(this).addClass(e.call(this, t, mt(this)))
                });
                if ((t = gt(e)).length)
                    for (; n = this[l++];)
                        if (a = mt(n), r = 1 === n.nodeType && " " + ft(a) + " ") {
                            for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            a !== (s = ft(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(e) {
                var t, n, r, a, i, o, s, l = 0;
                if (v(e)) return this.each(function(t) {
                    E(this).removeClass(e.call(this, t, mt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = gt(e)).length)
                    for (; n = this[l++];)
                        if (a = mt(n), r = 1 === n.nodeType && " " + ft(a) + " ") {
                            for (o = 0; i = t[o++];)
                                for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                            a !== (s = ft(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
                    E(this).toggleClass(e.call(this, n, mt(this), t), t)
                }) : this.each(function() {
                    var t, a, i, o;
                    if (r)
                        for (a = 0, i = E(this), o = gt(e); t = o[a++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = mt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + ft(mt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var yt = /\r/g;
        E.fn.extend({
            val: function(e) {
                var t, n, r, a = this[0];
                return arguments.length ? (r = v(e), this.each(function(n) {
                    var a;
                    1 === this.nodeType && (null == (a = r ? e.call(this, n, E(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = E.map(a, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                })) : a ? (t = E.valHooks[a.type] || E.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : "string" == typeof(n = a.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
            }
        }), E.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : ft(E.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, a = e.options,
                            i = e.selectedIndex,
                            o = "select-one" === e.type,
                            s = o ? null : [],
                            l = o ? i + 1 : a.length;
                        for (r = i < 0 ? l : o ? i : 0; r < l; r++)
                            if (((n = a[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), o) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        for (var n, r, a = e.options, i = E.makeArray(t), o = a.length; o--;)((r = a[o]).selected = E.inArray(E.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), E.each(["radio", "checkbox"], function() {
            E.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1
                }
            }, y.checkOn || (E.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), y.focusin = "onfocusin" in n;
        var vt = /^(?:focusinfocus|focusoutblur)$/,
            bt = function(e) {
                e.stopPropagation()
            };
        E.extend(E.event, {
            trigger: function(e, t, r, a) {
                var i, s, l, u, c, d, p, h, m = [r || o],
                    g = f.call(e, "type") ? e.type : e,
                    y = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = h = l = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !vt.test(g + E.event.triggered) && (g.indexOf(".") > -1 && (g = (y = g.split(".")).shift(), y.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[E.expando] ? e : new E.Event(g, "object" == typeof e && e)).isTrigger = a ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : E.makeArray(t, [e]), p = E.event.special[g] || {}, a || !p.trigger || !1 !== p.trigger.apply(r, t))) {
                    if (!a && !p.noBubble && !b(r)) {
                        for (u = p.delegateType || g, vt.test(u + g) || (s = s.parentNode); s; s = s.parentNode) m.push(s), l = s;
                        l === (r.ownerDocument || o) && m.push(l.defaultView || l.parentWindow || n)
                    }
                    for (i = 0;
                        (s = m[i++]) && !e.isPropagationStopped();) h = s, e.type = i > 1 ? u : p.bindType || g, (d = (Z.get(s, "events") || {})[e.type] && Z.get(s, "handle")) && d.apply(s, t), (d = c && s[c]) && d.apply && Q(s) && (e.result = d.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = g, a || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), t) || !Q(r) || c && v(r[g]) && !b(r) && ((l = r[c]) && (r[c] = null), E.event.triggered = g, e.isPropagationStopped() && h.addEventListener(g, bt), r[g](), e.isPropagationStopped() && h.removeEventListener(g, bt), E.event.triggered = void 0, l && (r[c] = l)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = E.extend(new E.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                E.event.trigger(r, null, t)
            }
        }), E.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    E.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0)
            }
        }), y.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                E.event.simulate(t, e.target, E.event.fix(e))
            };
            E.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        a = Z.access(r, t);
                    a || r.addEventListener(e, n, !0), Z.access(r, t, (a || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        a = Z.access(r, t) - 1;
                    a ? Z.access(r, t, a) : (r.removeEventListener(e, n, !0), Z.remove(r, t))
                }
            }
        });
        var wt = n.location,
            kt = Date.now(),
            xt = /\?/;
        E.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
        };
        var Et = /\[\]$/,
            Pt = /\r?\n/g,
            St = /^(?:submit|button|image|reset|file)$/i,
            Tt = /^(?:input|select|textarea|keygen)/i;

        function Ct(e, t, n, r) {
            var a;
            if (Array.isArray(t)) E.each(t, function(t, a) {
                n || Et.test(e) ? r(e, a) : Ct(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, r)
            });
            else if (n || "object" !== x(t)) r(e, t);
            else
                for (a in t) Ct(e + "[" + a + "]", t[a], n, r)
        }
        E.param = function(e, t) {
            var n, r = [],
                a = function(e, t) {
                    var n = v(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
                a(this.name, this.value)
            });
            else
                for (n in e) Ct(n, e[n], t, a);
            return r.join("&")
        }, E.fn.extend({
            serialize: function() {
                return E.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && Tt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
                }).map(function(e, t) {
                    var n = E(this).val();
                    return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Pt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Pt, "\r\n")
                    }
                }).get()
            }
        });
        var At = /%20/g,
            _t = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Rt = /^(?:GET|HEAD)$/,
            Ot = /^\/\//,
            Ft = {},
            It = {},
            $t = "*/".concat("*"),
            Nt = o.createElement("a");

        function Lt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, a = 0,
                    i = t.toLowerCase().match(L) || [];
                if (v(n))
                    for (; r = i[a++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Mt(e, t, n, r) {
            var a = {},
                i = e === It;

            function o(s) {
                var l;
                return a[s] = !0, E.each(e[s] || [], function(e, s) {
                    var u = s(t, n, r);
                    return "string" != typeof u || i || a[u] ? i ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            return o(t.dataTypes[0]) || !a["*"] && o("*")
        }

        function Bt(e, t) {
            var n, r, a = E.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((a[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e
        }
        Nt.href = wt.href, E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": E.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e)
            },
            ajaxPrefilter: Lt(Ft),
            ajaxTransport: Lt(It),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, a, i, s, l, u, c, d, p, h, f = E.ajaxSetup({}, t),
                    m = f.context || f,
                    g = f.context && (m.nodeType || m.jquery) ? E(m) : E.event,
                    y = E.Deferred(),
                    v = E.Callbacks("once memory"),
                    b = f.statusCode || {},
                    w = {},
                    k = {},
                    x = "canceled",
                    P = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s)
                                    for (s = {}; t = jt.exec(i);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return c ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, w[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) P.always(e[P.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return r && r.abort(t), S(0, t), this
                        }
                    };
                if (y.promise(P), f.url = ((e || f.url || wt.href) + "").replace(Ot, wt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain) {
                    u = o.createElement("a");
                    try {
                        u.href = f.url, u.href = u.href, f.crossDomain = Nt.protocol + "//" + Nt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Mt(Ft, f, t, P), c) return P;
                for (p in (d = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Rt.test(f.type), a = f.url.replace(_t, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (h = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (xt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(Dt, "$1"), h = (xt.test(a) ? "&" : "?") + "_=" + kt++ + h), f.url = a + h), f.ifModified && (E.lastModified[a] && P.setRequestHeader("If-Modified-Since", E.lastModified[a]), E.etag[a] && P.setRequestHeader("If-None-Match", E.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && P.setRequestHeader("Content-Type", f.contentType), P.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : f.accepts["*"]), f.headers) P.setRequestHeader(p, f.headers[p]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, P, f) || c)) return P.abort();
                if (x = "abort", v.add(f.complete), P.done(f.success), P.fail(f.error), r = Mt(It, f, t, P)) {
                    if (P.readyState = 1, d && g.trigger("ajaxSend", [P, f]), c) return P;
                    f.async && f.timeout > 0 && (l = n.setTimeout(function() {
                        P.abort("timeout")
                    }, f.timeout));
                    try {
                        c = !1, r.send(w, S)
                    } catch (e) {
                        if (c) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(e, t, o, s) {
                    var u, p, h, w, k, x = t;
                    c || (c = !0, l && n.clearTimeout(l), r = void 0, i = s || "", P.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, o && (w = function(e, t, n) {
                        for (var r, a, i, o, s = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (a in s)
                                if (s[a] && s[a].test(r)) {
                                    l.unshift(a);
                                    break
                                } if (l[0] in n) i = l[0];
                        else {
                            for (a in n) {
                                if (!l[0] || e.converters[a + " " + l[0]]) {
                                    i = a;
                                    break
                                }
                                o || (o = a)
                            }
                            i = i || o
                        }
                        if (i) return i !== l[0] && l.unshift(i), n[i]
                    }(f, P, o)), w = function(e, t, n, r) {
                        var a, i, o, s, l, u = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                        for (i = c.shift(); i;)
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                                if ("*" === i) i = l;
                                else if ("*" !== l && l !== i) {
                            if (!(o = u[l + " " + i] || u["* " + i]))
                                for (a in u)
                                    if ((s = a.split(" "))[1] === i && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                                        !0 === o ? o = u[a] : !0 !== u[a] && (i = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== o)
                                if (o && e.throws) t = o(t);
                                else try {
                                    t = o(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: o ? e : "No conversion from " + l + " to " + i
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, w, P, u), u ? (f.ifModified && ((k = P.getResponseHeader("Last-Modified")) && (E.lastModified[a] = k), (k = P.getResponseHeader("etag")) && (E.etag[a] = k)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, p = w.data, u = !(h = w.error))) : (h = x, !e && x || (x = "error", e < 0 && (e = 0))), P.status = e, P.statusText = (t || x) + "", u ? y.resolveWith(m, [p, x, P]) : y.rejectWith(m, [P, x, h]), P.statusCode(b), b = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [P, f, u ? p : h]), v.fireWith(m, [P, x]), d && (g.trigger("ajaxComplete", [P, f]), --E.active || E.event.trigger("ajaxStop")))
                }
                return P
            },
            getJSON: function(e, t, n) {
                return E.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return E.get(e, void 0, t, "script")
            }
        }), E.each(["get", "post"], function(e, t) {
            E[t] = function(e, n, r, a) {
                return v(n) && (a = a || r, r = n, n = void 0), E.ajax(E.extend({
                    url: e,
                    type: t,
                    dataType: a,
                    data: n,
                    success: r
                }, E.isPlainObject(e) && e))
            }
        }), E._evalUrl = function(e) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, E.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return v(e) ? this.each(function(t) {
                    E(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = E(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = v(e);
                return this.each(function(n) {
                    E(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    E(this).replaceWith(this.childNodes)
                }), this
            }
        }), E.expr.pseudos.hidden = function(e) {
            return !E.expr.pseudos.visible(e)
        }, E.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, E.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Ht = {
                0: 200,
                1223: 204
            },
            qt = E.ajaxSettings.xhr();
        y.cors = !!qt && "withCredentials" in qt, y.ajax = qt = !!qt, E.ajaxTransport(function(e) {
            var t, r;
            if (y.cors || qt && !e.crossDomain) return {
                send: function(a, i) {
                    var o, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) s[o] = e.xhrFields[o];
                    for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) s.setRequestHeader(o, a[o]);
                    t = function(e) {
                        return function() {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), E.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), E.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return E.globalEval(e), e
                }
            }
        }), E.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), E.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain) return {
                send: function(r, a) {
                    t = E("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
                    }), o.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Ut = [],
            zt = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || E.expando + "_" + kt++;
                return this[e] = !0, e
            }
        }), E.ajaxPrefilter("json jsonp", function(e, t, r) {
            var a, i, o, s = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return a = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(zt, "$1" + a) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function() {
                return o || E.error(a + " was not called"), o[0]
            }, e.dataTypes[0] = "json", i = n[a], n[a] = function() {
                o = arguments
            }, r.always(function() {
                void 0 === i ? E(n).removeProp(a) : n[a] = i, e[a] && (e.jsonpCallback = t.jsonpCallback, Ut.push(a)), o && v(i) && i(o[0]), o = i = void 0
            }), "script"
        }), y.createHTMLDocument = function() {
            var e = o.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), E.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, t.head.appendChild(r)) : t = o), a = j.exec(e), i = !n && [], a ? [t.createElement(a[1])] : (a = be([e], t, i), i && i.length && E(i).remove(), E.merge([], a.childNodes)));
            var r, a, i
        }, E.fn.load = function(e, t, n) {
            var r, a, i, o = this,
                s = e.indexOf(" ");
            return s > -1 && (r = ft(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && E.ajax({
                url: e,
                type: a || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments, o.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }), this
        }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            E.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), E.expr.pseudos.animated = function(e) {
            return E.grep(E.timers, function(t) {
                return e === t.elem
            }).length
        }, E.offset = {
            setOffset: function(e, t, n) {
                var r, a, i, o, s, l, u = E.css(e, "position"),
                    c = E(e),
                    d = {};
                "static" === u && (e.style.position = "relative"), s = c.offset(), i = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1 ? (o = (r = c.position()).top, a = r.left) : (o = parseFloat(i) || 0, a = parseFloat(l) || 0), v(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + a), "using" in t ? t.using.call(e, d) : c.css(d)
            }
        }, E.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    E.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        a = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((a = E(e).offset()).top += E.css(e, "borderTopWidth", !0), a.left += E.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - a.top - E.css(r, "marginTop", !0),
                        left: t.left - a.left - E.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                    return e || we
                })
            }
        }), E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            E.fn[e] = function(r) {
                return V(this, function(e, r, a) {
                    var i;
                    if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === a) return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : a, n ? a : i.pageYOffset) : e[r] = a
                }, e, r, arguments.length)
            }
        }), E.each(["top", "left"], function(e, t) {
            E.cssHooks[t] = Ue(y.pixelPosition, function(e, n) {
                if (n) return n = qe(e, t), Me.test(n) ? E(e).position()[t] + "px" : n
            })
        }), E.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            E.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                E.fn[r] = function(a, i) {
                    var o = arguments.length && (n || "boolean" != typeof a),
                        s = n || (!0 === a || !0 === i ? "margin" : "border");
                    return V(this, function(t, n, a) {
                        var i;
                        return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === a ? E.css(t, n, s) : E.style(t, n, a, s)
                    }, t, o ? a : void 0, o)
                }
            })
        }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            E.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), E.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), E.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), E.proxy = function(e, t) {
            var n, r, a;
            if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = l.call(arguments, 2), (a = function() {
                return e.apply(t || this, r.concat(l.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, a
        }, E.holdReady = function(e) {
            e ? E.readyWait++ : E.ready(!0)
        }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = D, E.isFunction = v, E.isWindow = b, E.camelCase = X, E.type = x, E.now = Date.now, E.isNumeric = function(e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (r = function() {
            return E
        }.apply(t, [])) || (e.exports = r);
        var Vt = n.jQuery,
            Kt = n.$;
        return E.noConflict = function(e) {
            return n.$ === E && (n.$ = Kt), e && n.jQuery === E && (n.jQuery = Vt), E
        }, a || (n.jQuery = n.$ = E), E
    })
}, function(e, t, n) {
    n(5)(n(6))
}, function(e, t) {
    e.exports = function(e) {
        function t(e) {
            "undefined" != typeof console && (console.error || console.log)("[Script Loader]", e)
        }
        try {
            "undefined" != typeof execScript && "undefined" != typeof attachEvent && "undefined" == typeof addEventListener ? execScript(e) : "undefined" != typeof eval ? eval.call(null, e) : t("EvalError: No eval function available")
        } catch (e) {
            t(e)
        }
    }
}, function(e, t) {
    e.exports = 'function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n!function (e) {\n  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Ajv = e();\n}(function () {\n  return function o(i, n, l) {\n    function u(r, e) {\n      if (!n[r]) {\n        if (!i[r]) {\n          var t = "function" == typeof require && require;\n          if (!e && t) return t(r, !0);\n          if (c) return c(r, !0);\n          var a = new Error("Cannot find module \'" + r + "\'");\n          throw a.code = "MODULE_NOT_FOUND", a;\n        }\n\n        var s = n[r] = {\n          exports: {}\n        };\n        i[r][0].call(s.exports, function (e) {\n          return u(i[r][1][e] || e);\n        }, s, s.exports, o, i, n, l);\n      }\n\n      return n[r].exports;\n    }\n\n    for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) {\n      u(l[e]);\n    }\n\n    return u;\n  }({\n    1: [function (e, r, t) {\n      "use strict";\n\n      var a = r.exports = function () {\n        this._cache = {};\n      };\n\n      a.prototype.put = function (e, r) {\n        this._cache[e] = r;\n      }, a.prototype.get = function (e) {\n        return this._cache[e];\n      }, a.prototype.del = function (e) {\n        delete this._cache[e];\n      }, a.prototype.clear = function () {\n        this._cache = {};\n      };\n    }, {}],\n    2: [function (e, r, t) {\n      "use strict";\n\n      var s = e("./error_classes").MissingRef;\n\n      r.exports = function t(r, i, a) {\n        function l(e) {\n          var r = e.$schema;\n          return r && !n.getSchema(r) ? t.call(n, {\n            $ref: r\n          }, !0) : Promise.resolve();\n        }\n\n        function u(o) {\n          try {\n            return n._compile(o);\n          } catch (e) {\n            if (e instanceof s) return function (e) {\n              function a() {\n                delete n._loadingSchemas[r];\n              }\n\n              function s(e) {\n                return n._refs[e] || n._schemas[e];\n              }\n\n              var r = e.missingSchema;\n              if (s(r)) throw new Error("Schema " + r + " is loaded but " + e.missingRef + " cannot be resolved");\n              var t = n._loadingSchemas[r];\n              return t || (t = n._loadingSchemas[r] = n._opts.loadSchema(r)).then(a, a), t.then(function (e) {\n                if (!s(r)) return l(e).then(function () {\n                  s(r) || n.addSchema(e, r, void 0, i);\n                });\n              }).then(function () {\n                return u(o);\n              });\n            }(e);\n            throw e;\n          }\n        }\n\n        var n = this;\n        if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be a function");\n        "function" == typeof i && (a = i, i = void 0);\n        var e = l(r).then(function () {\n          var e = n._addSchema(r, void 0, i);\n\n          return e.validate || function (o) {\n            try {\n              return n._compile(o);\n            } catch (e) {\n              if (e instanceof s) return function (e) {\n                function a() {\n                  delete n._loadingSchemas[r];\n                }\n\n                function s(e) {\n                  return n._refs[e] || n._schemas[e];\n                }\n\n                var r = e.missingSchema;\n                if (s(r)) throw new Error("Schema " + r + " is loaded but " + e.missingRef + " cannot be resolved");\n                var t = n._loadingSchemas[r];\n                return t || (t = n._loadingSchemas[r] = n._opts.loadSchema(r)).then(a, a), t.then(function (e) {\n                  if (!s(r)) return l(e).then(function () {\n                    s(r) || n.addSchema(e, r, void 0, i);\n                  });\n                }).then(function () {\n                  return u(o);\n                });\n              }(e);\n              throw e;\n            }\n          }(e);\n        });\n        return a && e.then(function (e) {\n          a(null, e);\n        }, a), e;\n      };\n    }, {\n      "./error_classes": 3\n    }],\n    3: [function (e, r, t) {\n      "use strict";\n\n      function s(e, r, t) {\n        this.message = t || s.message(e, r), this.missingRef = a.url(e, r), this.missingSchema = a.normalizeId(a.fullPath(this.missingRef));\n      }\n\n      function o(e) {\n        return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e;\n      }\n\n      var a = e("./resolve");\n      r.exports = {\n        Validation: o(function (e) {\n          this.message = "validation failed", this.errors = e, this.ajv = this.validation = !0;\n        }),\n        MissingRef: o(s)\n      }, s.message = function (e, r) {\n        return "can\'t resolve reference " + r + " from id " + e;\n      };\n    }, {\n      "./resolve": 6\n    }],\n    4: [function (e, r, t) {\n      "use strict";\n\n      function m(e) {\n        return a.copy(m[e = "full" == e ? "full" : "fast"]);\n      }\n\n      function v(e) {\n        var r = e.match(o);\n        if (!r) return !1;\n        var t,\n            a = +r[2],\n            s = +r[3];\n        return 1 <= a && a <= 12 && 1 <= s && s <= (2 != a || (t = +r[1]) % 4 != 0 || t % 100 == 0 && t % 400 != 0 ? i[a] : 29);\n      }\n\n      function g(e, r) {\n        var t = e.match(n);\n        if (!t) return !1;\n        var a = t[1],\n            s = t[2],\n            o = t[3];\n        return (a <= 23 && s <= 59 && o <= 59 || 23 == a && 59 == s && 60 == o) && (!r || t[5]);\n      }\n\n      function w(e) {\n        if (E.test(e)) return !1;\n\n        try {\n          return new RegExp(e), !0;\n        } catch (e) {\n          return !1;\n        }\n      }\n\n      var a = e("./util"),\n          o = /^(\\d\\d\\d\\d)-(\\d\\d)-(\\d\\d)$/,\n          i = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],\n          n = /^(\\d\\d):(\\d\\d):(\\d\\d)(\\.\\d+)?(z|[+-]\\d\\d:\\d\\d)?$/i,\n          s = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,\n          l = /^(?:[a-z][a-z0-9+\\-.]*:)(?:\\/?\\/(?:(?:[a-z0-9\\-._~!$&\'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\\.[a-z0-9\\-._~!$&\'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|(?:[a-z0-9\\-._~!$&\'()*+,;=]|%[0-9a-f]{2})*)(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})*)*|\\/(?:(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\\?(?:[a-z0-9\\-._~!$&\'()*+,;=:@\\/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\\-._~!$&\'()*+,;=:@\\/?]|%[0-9a-f]{2})*)?$/i,\n          u = /^(?:(?:[^\\x00-\\x20"\'<>%\\\\^`{|}]|%[0-9a-f]{2})|\\{[+#.\\/;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\\*)?)*\\})*$/i,\n          c = /^(?:(?:http[s\\u017F]?|ftp):\\/\\/)(?:(?:[\\0-\\x08\\x0E-\\x1F!-\\x9F\\xA1-\\u167F\\u1681-\\u1FFF\\u200B-\\u2027\\u202A-\\u202E\\u2030-\\u205E\\u2060-\\u2FFF\\u3001-\\uD7FF\\uE000-\\uFEFE\\uFF00-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+(?::(?:[\\0-\\x08\\x0E-\\x1F!-\\x9F\\xA1-\\u167F\\u1681-\\u1FFF\\u200B-\\u2027\\u202A-\\u202E\\u2030-\\u205E\\u2060-\\u2FFF\\u3001-\\uD7FF\\uE000-\\uFEFE\\uFF00-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*)?@)?(?:(?!10(?:\\.[0-9]{1,3}){3})(?!127(?:\\.[0-9]{1,3}){3})(?!169\\.254(?:\\.[0-9]{1,3}){2})(?!192\\.168(?:\\.[0-9]{1,3}){2})(?!172\\.(?:1[6-9]|2[0-9]|3[01])(?:\\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\\xA1-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+-?)*(?:[0-9KSa-z\\xA1-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+)(?:\\.(?:(?:[0-9KSa-z\\xA1-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+-?)*(?:[0-9KSa-z\\xA1-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+)*(?:\\.(?:(?:[KSa-z\\xA1-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\\/(?:[\\0-\\x08\\x0E-\\x1F!-\\x9F\\xA1-\\u167F\\u1681-\\u1FFF\\u200B-\\u2027\\u202A-\\u202E\\u2030-\\u205E\\u2060-\\u2FFF\\u3001-\\uD7FF\\uE000-\\uFEFE\\uFF00-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])*)?$/i,\n          h = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,\n          d = /^(?:\\/(?:[^~\\/]|~0|~1)*)*$/,\n          f = /^#(?:\\/(?:[a-z0-9_\\-.!$&\'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,\n          p = /^(?:0|[1-9][0-9]*)(?:#|(?:\\/(?:[^~\\/]|~0|~1)*)*)$/;\n      (r.exports = m).fast = {\n        date: /^\\d\\d\\d\\d-[0-1]\\d-[0-3]\\d$/,\n        time: /^(?:[0-2]\\d:[0-5]\\d:[0-5]\\d|23:59:60)(?:\\.\\d+)?(?:z|[+-]\\d\\d:\\d\\d)?$/i,\n        "date-time": /^\\d\\d\\d\\d-[0-1]\\d-[0-3]\\d[t\\s](?:[0-2]\\d:[0-5]\\d:[0-5]\\d|23:59:60)(?:\\.\\d+)?(?:z|[+-]\\d\\d:\\d\\d)$/i,\n        uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\\/?\\/)?[^\\s]*$/i,\n        "uri-reference": /^(?:(?:[a-z][a-z0-9+-.]*:)?\\/?\\/)?(?:[^\\\\\\s#][^\\s#]*)?(?:#[^\\\\\\s]*)?$/i,\n        "uri-template": u,\n        url: c,\n        email: /^[a-z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,\n        hostname: s,\n        ipv4: /^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$/,\n        ipv6: /^\\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(?:%.+)?\\s*$/i,\n        regex: w,\n        uuid: h,\n        "json-pointer": d,\n        "json-pointer-uri-fragment": f,\n        "relative-json-pointer": p\n      }, m.full = {\n        date: v,\n        time: g,\n        "date-time": function dateTime(e) {\n          var r = e.split(y);\n          return 2 == r.length && v(r[0]) && g(r[1], !0);\n        },\n        uri: function uri(e) {\n          return P.test(e) && l.test(e);\n        },\n        "uri-reference": /^(?:[a-z][a-z0-9+\\-.]*:)?(?:\\/?\\/(?:(?:[a-z0-9\\-._~!$&\'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\\.[a-z0-9\\-._~!$&\'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|(?:[a-z0-9\\-._~!$&\'"()*+,;=]|%[0-9a-f]{2})*)(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~!$&\'"()*+,;=:@]|%[0-9a-f]{2})*)*|\\/(?:(?:[a-z0-9\\-._~!$&\'"()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&\'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\\-._~!$&\'"()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&\'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\\?(?:[a-z0-9\\-._~!$&\'"()*+,;=:@\\/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\\-._~!$&\'"()*+,;=:@\\/?]|%[0-9a-f]{2})*)?$/i,\n        "uri-template": u,\n        url: c,\n        email: /^[a-z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'\'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,\n        hostname: function hostname(e) {\n          return e.length <= 255 && s.test(e);\n        },\n        ipv4: /^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$/,\n        ipv6: /^\\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(?:%.+)?\\s*$/i,\n        regex: w,\n        uuid: h,\n        "json-pointer": d,\n        "json-pointer-uri-fragment": f,\n        "relative-json-pointer": p\n      };\n      var y = /t|\\s/i,\n          P = /\\/|:/,\n          E = /[^\\\\]\\\\Z/;\n    }, {\n      "./util": 10\n    }],\n    5: [function (e, r, t) {\n      "use strict";\n\n      function k(e, r, t) {\n        for (var a = 0; a < this._compilations.length; a++) {\n          var s = this._compilations[a];\n          if (s.schema == e && s.root == r && s.baseId == t) return a;\n        }\n\n        return -1;\n      }\n\n      function L(e, r) {\n        return "var pattern" + e + " = new RegExp(" + D.toQuotedString(r[e]) + ");";\n      }\n\n      function z(e) {\n        return "var default" + e + " = defaults[" + e + "];";\n      }\n\n      function T(e, r) {\n        return void 0 === r[e] ? "" : "var refVal" + e + " = refVal[" + e + "];";\n      }\n\n      function N(e) {\n        return "var customRule" + e + " = customRules[" + e + "];";\n      }\n\n      function q(e, r) {\n        if (!e.length) return "";\n\n        for (var t = "", a = 0; a < e.length; a++) {\n          t += r(a, e);\n        }\n\n        return t;\n      }\n\n      var $ = e("./resolve"),\n          D = e("./util"),\n          j = e("./error_classes"),\n          l = e("fast-json-stable-stringify"),\n          I = e("../dotjs/validate"),\n          O = D.ucs2length,\n          A = e("fast-deep-equal"),\n          C = j.Validation;\n\n      r.exports = function u(e, c, h, r) {\n        function w(e, r, t, a) {\n          var s = !r || r && r.schema == e;\n          if (r.schema != c.schema) return u.call(d, e, r, t, a);\n          var o,\n              i = !0 === e.$async,\n              n = I({\n            isTop: !0,\n            schema: e,\n            isRoot: s,\n            baseId: a,\n            root: r,\n            schemaPath: "",\n            errSchemaPath: "#",\n            errorPath: \'""\',\n            MissingRefError: j.MissingRef,\n            RULES: E,\n            validate: I,\n            util: D,\n            resolve: $,\n            resolveRef: S,\n            usePattern: F,\n            useDefault: x,\n            useCustomRule: R,\n            opts: f,\n            formats: P,\n            logger: d.logger,\n            self: d\n          });\n          n = q(p, T) + q(v, L) + q(g, z) + q(y, N) + n, f.processCode && (n = f.processCode(n));\n\n          try {\n            o = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", n)(d, E, P, c, p, g, y, A, O, C), p[0] = o;\n          } catch (e) {\n            throw d.logger.error("Error compiling schema, function code:", n), e;\n          }\n\n          return o.schema = e, o.errors = null, o.refs = m, o.refVal = p, o.root = s ? o : r, i && (o.$async = !0), !0 === f.sourceCode && (o.source = {\n            code: n,\n            patterns: v,\n            defaults: g\n          }), o;\n        }\n\n        function S(e, r, t) {\n          r = $.url(e, r);\n          var a,\n              s,\n              o = m[r];\n          if (void 0 !== o) return _(a = p[o], s = "refVal[" + o + "]");\n\n          if (!t && c.refs) {\n            var i = c.refs[r];\n            if (void 0 !== i) return s = b(r, a = c.refVal[i]), _(a, s);\n          }\n\n          s = b(r);\n          var n = $.call(d, w, c, r);\n\n          if (void 0 === n) {\n            var l = h && h[r];\n            l && (n = $.inlineRef(l, f.inlineRefs) ? l : u.call(d, l, c, h, e));\n          }\n\n          if (void 0 !== n) return p[m[r]] = n, _(n, s);\n          delete m[r];\n        }\n\n        function b(e, r) {\n          var t = p.length;\n          return p[t] = r, "refVal" + (m[e] = t);\n        }\n\n        function _(e, r) {\n          return "object" == _typeof(e) || "boolean" == typeof e ? {\n            code: r,\n            schema: e,\n            inline: !0\n          } : {\n            code: r,\n            $async: e && !!e.$async\n          };\n        }\n\n        function F(e) {\n          var r = t[e];\n          return void 0 === r && (r = t[e] = v.length, v[r] = e), "pattern" + r;\n        }\n\n        function x(e) {\n          switch (_typeof(e)) {\n            case "boolean":\n            case "number":\n              return "" + e;\n\n            case "string":\n              return D.toQuotedString(e);\n\n            case "object":\n              if (null === e) return "null";\n              var r = l(e),\n                  t = a[r];\n              return void 0 === t && (t = a[r] = g.length, g[t] = e), "default" + t;\n          }\n        }\n\n        function R(e, r, t, a) {\n          var s = e.definition.validateSchema;\n\n          if (s && !1 !== d._opts.validateSchema) {\n            if (!s(r)) {\n              var i = "keyword schema is invalid: " + d.errorsText(s.errors);\n              if ("log" != d._opts.validateSchema) throw new Error(i);\n              d.logger.error(i);\n            }\n          }\n\n          var n,\n              l = e.definition.compile,\n              u = e.definition.inline,\n              c = e.definition.macro;\n          if (l) n = l.call(d, r, t, a);else if (c) n = c.call(d, r, t, a), !1 !== f.validateSchema && d.validateSchema(n, !0);else if (u) n = u.call(d, a, e.keyword, r, t);else if (!(n = e.definition.validate)) return;\n          if (void 0 === n) throw new Error(\'custom keyword "\' + e.keyword + \'"failed to compile\');\n          var h = y.length;\n          return {\n            code: "customRule" + h,\n            validate: y[h] = n\n          };\n        }\n\n        var d = this,\n            f = this._opts,\n            p = [void 0],\n            m = {},\n            v = [],\n            t = {},\n            g = [],\n            a = {},\n            y = [];\n        c = c || {\n          schema: e,\n          refVal: p,\n          refs: m\n        };\n\n        var s = function (e, r, t) {\n          var a = k.call(this, e, r, t);\n          return 0 <= a ? {\n            index: a,\n            compiling: !0\n          } : {\n            index: a = this._compilations.length,\n            compiling: (this._compilations[a] = {\n              schema: e,\n              root: r,\n              baseId: t\n            }, !1)\n          };\n        }.call(this, e, c, r),\n            o = this._compilations[s.index];\n\n        if (s.compiling) return o.callValidate = function e() {\n          var r = o.validate,\n              t = r.apply(this, arguments);\n          return e.errors = r.errors, t;\n        };\n        var P = this._formats,\n            E = this.RULES;\n\n        try {\n          var i = w(e, c, h, r);\n          o.validate = i;\n          var n = o.callValidate;\n          return n && (n.schema = i.schema, n.errors = null, n.refs = i.refs, n.refVal = i.refVal, n.root = i.root, n.$async = i.$async, f.sourceCode && (n.source = i.source)), i;\n        } finally {\n          (function (e, r, t) {\n            var a = k.call(this, e, r, t);\n            0 <= a && this._compilations.splice(a, 1);\n          }).call(this, e, c, r);\n        }\n      };\n    }, {\n      "../dotjs/validate": 37,\n      "./error_classes": 3,\n      "./resolve": 6,\n      "./util": 10,\n      "fast-deep-equal": 41,\n      "fast-json-stable-stringify": 42\n    }],\n    6: [function (e, r, t) {\n      "use strict";\n\n      function u(e, r, t) {\n        var a = this._refs[t];\n\n        if ("string" == typeof a) {\n          if (!this._refs[a]) return u.call(this, e, r, a);\n          a = this._refs[a];\n        }\n\n        if ((a = a || this._schemas[t]) instanceof l) return d(a.schema, this._opts.inlineRefs) ? a.schema : a.validate || this._compile(a);\n        var s,\n            o,\n            i,\n            n = c.call(this, r, t);\n        return n && (s = n.schema, r = n.root, i = n.baseId), s instanceof l ? o = s.validate || e.call(this, s.schema, r, void 0, i) : void 0 !== s && (o = d(s, this._opts.inlineRefs) ? s : e.call(this, s, r, void 0, i)), o;\n      }\n\n      function c(e, r) {\n        var t = m.parse(r),\n            a = f(t),\n            s = y(this._getId(e.schema));\n\n        if (a !== s) {\n          var o = P(a),\n              i = this._refs[o];\n          if ("string" == typeof i) return function (e, r, t) {\n            var a = c.call(this, e, r);\n\n            if (a) {\n              var s = a.schema,\n                  o = a.baseId;\n              e = a.root;\n\n              var i = this._getId(s);\n\n              return i && (o = p(o, i)), n.call(this, t, o, s, e);\n            }\n          }.call(this, e, i, t);\n          if (i instanceof l) i.validate || this._compile(i), e = i;else {\n            if (!((i = this._schemas[o]) instanceof l)) return;\n            if (i.validate || this._compile(i), o == P(r)) return {\n              schema: i,\n              root: e,\n              baseId: s\n            };\n            e = i;\n          }\n          if (!e.schema) return;\n          s = y(this._getId(e.schema));\n        }\n\n        return n.call(this, t, s, e.schema, e);\n      }\n\n      function n(e, r, t, a) {\n        if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {\n          for (var s = e.fragment.split("/"), o = 1; o < s.length; o++) {\n            var i = s[o];\n\n            if (i) {\n              if (void 0 === (t = t[i = g.unescapeFragment(i)])) break;\n              var n;\n\n              if (!h[i] && ((n = this._getId(t)) && (r = p(r, n)), t.$ref)) {\n                var l = p(r, t.$ref),\n                    u = c.call(this, a, l);\n                u && (t = u.schema, a = u.root, r = u.baseId);\n              }\n            }\n          }\n\n          return void 0 !== t && t !== a.schema ? {\n            schema: t,\n            root: a,\n            baseId: r\n          } : void 0;\n        }\n      }\n\n      function d(e, r) {\n        return !1 !== r && (void 0 === r || !0 === r ? function e(r) {\n          var t;\n\n          if (Array.isArray(r)) {\n            for (var a = 0; a < r.length; a++) {\n              if ("object" == _typeof(t = r[a]) && !e(t)) return !1;\n            }\n          } else for (var s in r) {\n            if ("$ref" == s) return !1;\n            if ("object" == _typeof(t = r[s]) && !e(t)) return !1;\n          }\n\n          return !0;\n        }(e) : r ? function e(r) {\n          var t,\n              a = 0;\n\n          if (Array.isArray(r)) {\n            for (var s = 0; s < r.length; s++) {\n              if ("object" == _typeof(t = r[s]) && (a += e(t)), a == 1 / 0) return 1 / 0;\n            }\n          } else for (var o in r) {\n            if ("$ref" == o) return 1 / 0;\n            if (i[o]) a++;else if ("object" == _typeof(t = r[o]) && (a += e(t) + 1), a == 1 / 0) return 1 / 0;\n          }\n\n          return a;\n        }(e) <= r : void 0);\n      }\n\n      function y(e, r) {\n        return !1 !== r && (e = P(e)), f(m.parse(e));\n      }\n\n      function f(e) {\n        return m.serialize(e).split("#")[0] + "#";\n      }\n\n      function P(e) {\n        return e ? e.replace(s, "") : "";\n      }\n\n      function p(e, r) {\n        return r = P(r), m.resolve(e, r);\n      }\n\n      var m = e("uri-js"),\n          v = e("fast-deep-equal"),\n          g = e("./util"),\n          l = e("./schema_obj"),\n          a = e("json-schema-traverse");\n      (r.exports = u).normalizeId = P, u.fullPath = y, u.url = p, u.ids = function (e) {\n        var r = P(this._getId(e)),\n            h = {\n          "": r\n        },\n            d = {\n          "": y(r, !1)\n        },\n            f = {},\n            p = this;\n        return a(e, {\n          allKeys: !0\n        }, function (e, r, t, a, s, o, i) {\n          if ("" !== r) {\n            var n = p._getId(e),\n                l = h[a],\n                u = d[a] + "/" + s;\n\n            if (void 0 !== i && (u += "/" + ("number" == typeof i ? i : g.escapeFragment(i))), "string" == typeof n) {\n              n = l = P(l ? m.resolve(l, n) : n);\n              var c = p._refs[n];\n\n              if ("string" == typeof c && (c = p._refs[c]), c && c.schema) {\n                if (!v(e, c.schema)) throw new Error(\'id "\' + n + \'" resolves to more than one schema\');\n              } else if (n != P(u)) if ("#" == n[0]) {\n                if (f[n] && !v(e, f[n])) throw new Error(\'id "\' + n + \'" resolves to more than one schema\');\n                f[n] = e;\n              } else p._refs[n] = u;\n            }\n\n            h[r] = l, d[r] = u;\n          }\n        }), f;\n      }, u.inlineRef = d, u.schema = c;\n      var h = g.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]),\n          i = g.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]),\n          s = /#\\/?$/;\n    }, {\n      "./schema_obj": 8,\n      "./util": 10,\n      "fast-deep-equal": 41,\n      "json-schema-traverse": 43,\n      "uri-js": 44\n    }],\n    7: [function (e, r, t) {\n      "use strict";\n\n      var o = e("../dotjs"),\n          i = e("./util").toHash;\n\n      r.exports = function () {\n        var a = [{\n          type: "number",\n          rules: [{\n            maximum: ["exclusiveMaximum"]\n          }, {\n            minimum: ["exclusiveMinimum"]\n          }, "multipleOf", "format"]\n        }, {\n          type: "string",\n          rules: ["maxLength", "minLength", "pattern", "format"]\n        }, {\n          type: "array",\n          rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]\n        }, {\n          type: "object",\n          rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", {\n            properties: ["additionalProperties", "patternProperties"]\n          }]\n        }, {\n          rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"]\n        }],\n            s = ["type", "$comment"];\n        return a.all = i(s), a.types = i(["number", "integer", "string", "array", "object", "boolean", "null"]), a.forEach(function (e) {\n          e.rules = e.rules.map(function (e) {\n            var r;\n\n            if ("object" == _typeof(e)) {\n              var t = Object.keys(e)[0];\n              r = e[t], e = t, r.forEach(function (e) {\n                s.push(e), a.all[e] = !0;\n              });\n            }\n\n            return s.push(e), a.all[e] = {\n              keyword: e,\n              code: o[e],\n              implements: r\n            };\n          }), a.all.$comment = {\n            keyword: "$comment",\n            code: o.$comment\n          }, e.type && (a.types[e.type] = e);\n        }), a.keywords = i(s.concat(["$schema", "$id", "id", "$data", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"])), a.custom = {}, a;\n      };\n    }, {\n      "../dotjs": 26,\n      "./util": 10\n    }],\n    8: [function (e, r, t) {\n      "use strict";\n\n      var a = e("./util");\n\n      r.exports = function (e) {\n        a.copy(e, this);\n      };\n    }, {\n      "./util": 10\n    }],\n    9: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e) {\n        for (var r, t = 0, a = e.length, s = 0; s < a;) {\n          t++, 55296 <= (r = e.charCodeAt(s++)) && r <= 56319 && s < a && 56320 == (64512 & (r = e.charCodeAt(s))) && s++;\n        }\n\n        return t;\n      };\n    }, {}],\n    10: [function (e, r, t) {\n      "use strict";\n\n      function o(e, r, t) {\n        var a = t ? " !== " : " === ",\n            s = t ? " || " : " && ",\n            o = t ? "!" : "",\n            i = t ? "" : "!";\n\n        switch (e) {\n          case "null":\n            return r + a + "null";\n\n          case "array":\n            return o + "Array.isArray(" + r + ")";\n\n          case "object":\n            return "(" + o + r + s + "typeof " + r + a + \'"object"\' + s + i + "Array.isArray(" + r + "))";\n\n          case "integer":\n            return "(typeof " + r + a + \'"number"\' + s + i + "(" + r + " % 1)" + s + r + a + r + ")";\n\n          default:\n            return "typeof " + r + a + \'"\' + e + \'"\';\n        }\n      }\n\n      function n(e) {\n        for (var r = {}, t = 0; t < e.length; t++) {\n          r[e[t]] = !0;\n        }\n\n        return r;\n      }\n\n      function h(e) {\n        return "number" == typeof e ? "[" + e + "]" : a.test(e) ? "." + e : "[\'" + l(e) + "\']";\n      }\n\n      function l(e) {\n        return e.replace(s, "\\\\$&").replace(/\\n/g, "\\\\n").replace(/\\r/g, "\\\\r").replace(/\\f/g, "\\\\f").replace(/\\t/g, "\\\\t");\n      }\n\n      function S(e) {\n        return "\'" + l(e) + "\'";\n      }\n\n      function F(e, r) {\n        return \'""\' == e ? r : (e + " + " + r).replace(/\' \\+ \'/g, "");\n      }\n\n      function x(e) {\n        return e.replace(/~/g, "~0").replace(/\\//g, "~1");\n      }\n\n      function R(e) {\n        return e.replace(/~1/g, "/").replace(/~0/g, "~");\n      }\n\n      r.exports = {\n        copy: function copy(e, r) {\n          for (var t in r = r || {}, e) {\n            r[t] = e[t];\n          }\n\n          return r;\n        },\n        checkDataType: o,\n        checkDataTypes: function checkDataTypes(e, r) {\n          switch (e.length) {\n            case 1:\n              return o(e[0], r, !0);\n\n            default:\n              var t = "",\n                  a = n(e);\n\n              for (var s in a.array && a.object && (t = a.null ? "(" : "(!" + r + " || ", t += "typeof " + r + \' !== "object")\', delete a.null, delete a.array, delete a.object), a.number && delete a.integer, a) {\n                t += (t ? " && " : "") + o(s, r, !0);\n              }\n\n              return t;\n          }\n        },\n        coerceToTypes: function coerceToTypes(e, r) {\n          if (Array.isArray(r)) {\n            for (var t = [], a = 0; a < r.length; a++) {\n              var s = r[a];\n              i[s] ? t[t.length] = s : "array" === e && "array" === s && (t[t.length] = s);\n            }\n\n            if (t.length) return t;\n          } else {\n            if (i[r]) return [r];\n            if ("array" === e && "array" === r) return ["array"];\n          }\n        },\n        toHash: n,\n        getProperty: h,\n        escapeQuotes: l,\n        equal: e("fast-deep-equal"),\n        ucs2length: e("./ucs2length"),\n        varOccurences: function varOccurences(e, r) {\n          var t = e.match(new RegExp(r += "[^0-9]", "g"));\n          return t ? t.length : 0;\n        },\n        varReplace: function varReplace(e, r, t) {\n          return r += "([^0-9])", t = t.replace(/\\$/g, "$$$$"), e.replace(new RegExp(r, "g"), t + "$1");\n        },\n        cleanUpCode: function cleanUpCode(e) {\n          return e.replace(u, "").replace(c, "").replace(d, "if (!($1))");\n        },\n        finalCleanUpCode: function finalCleanUpCode(e, r) {\n          var t = e.match(f);\n          return t && 2 == t.length && (e = r ? e.replace(m, "").replace(y, P) : e.replace(p, "").replace(v, g)), (t = e.match(E)) && 3 === t.length ? e.replace(w, "") : e;\n        },\n        schemaHasRules: function schemaHasRules(e, r) {\n          if ("boolean" == typeof e) return !e;\n\n          for (var t in e) {\n            if (r[t]) return !0;\n          }\n        },\n        schemaHasRulesExcept: function schemaHasRulesExcept(e, r, t) {\n          if ("boolean" == typeof e) return !e && "not" != t;\n\n          for (var a in e) {\n            if (a != t && r[a]) return !0;\n          }\n        },\n        toQuotedString: S,\n        getPathExpr: function getPathExpr(e, r, t, a) {\n          return F(e, t ? "\'/\' + " + r + (a ? "" : ".replace(/~/g, \'~0\').replace(/\\\\//g, \'~1\')") : a ? "\'[\' + " + r + " + \']\'" : "\'[\\\\\'\' + " + r + " + \'\\\\\']\'");\n        },\n        getPath: function getPath(e, r, t) {\n          return F(e, S(t ? "/" + x(r) : h(r)));\n        },\n        getData: function getData(e, r, t) {\n          var a, s, o, i;\n          if ("" === e) return "rootData";\n\n          if ("/" == e[0]) {\n            if (!b.test(e)) throw new Error("Invalid JSON-pointer: " + e);\n            s = e, o = "rootData";\n          } else {\n            if (!(i = e.match(_))) throw new Error("Invalid JSON-pointer: " + e);\n\n            if (a = +i[1], "#" == (s = i[2])) {\n              if (r <= a) throw new Error("Cannot access property/index " + a + " levels up, current level is " + r);\n              return t[r - a];\n            }\n\n            if (r < a) throw new Error("Cannot access data " + a + " levels up, current level is " + r);\n            if (o = "data" + (r - a || ""), !s) return o;\n          }\n\n          for (var n = o, l = s.split("/"), u = 0; u < l.length; u++) {\n            var c = l[u];\n            c && (o += h(R(c)), n += " && " + o);\n          }\n\n          return n;\n        },\n        unescapeFragment: function unescapeFragment(e) {\n          return R(decodeURIComponent(e));\n        },\n        unescapeJsonPointer: R,\n        escapeFragment: function escapeFragment(e) {\n          return encodeURIComponent(x(e));\n        },\n        escapeJsonPointer: x\n      };\n      var i = n(["string", "number", "integer", "boolean", "null"]),\n          a = /^[a-z$_][a-z$_0-9]*$/i,\n          s = /\'|\\\\/g,\n          u = /else\\s*{\\s*}/g,\n          c = /if\\s*\\([^)]+\\)\\s*\\{\\s*\\}(?!\\s*else)/g,\n          d = /if\\s*\\(([^)]+)\\)\\s*\\{\\s*\\}\\s*else(?!\\s*if)/g,\n          f = /[^v.]errors/g,\n          p = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,\n          m = /var errors = 0;|var vErrors = null;/g,\n          v = "return errors === 0;",\n          g = "validate.errors = null; return true;",\n          y = /if \\(errors === 0\\) return data;\\s*else throw new ValidationError\\(vErrors\\);/,\n          P = "return data;",\n          E = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,\n          w = /if \\(rootData === undefined\\) rootData = data;/,\n          b = /^\\/(?:[^~]|~0|~1)*$/,\n          _ = /^([0-9]+)(#|\\/(?:[^~]|~0|~1)*)?$/;\n    }, {\n      "./ucs2length": 9,\n      "fast-deep-equal": 41\n    }],\n    11: [function (e, r, t) {\n      "use strict";\n\n      var l = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];\n\n      r.exports = function (e, r) {\n        for (var t = 0; t < r.length; t++) {\n          e = JSON.parse(JSON.stringify(e));\n          var a,\n              s = r[t].split("/"),\n              o = e;\n\n          for (a = 1; a < s.length; a++) {\n            o = o[s[a]];\n          }\n\n          for (a = 0; a < l.length; a++) {\n            var i = l[a],\n                n = o[i];\n            n && (o[i] = {\n              anyOf: [n, {\n                $ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"\n              }]\n            });\n          }\n        }\n\n        return e;\n      };\n    }, {}],\n    12: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s = " ",\n            o = e.level,\n            i = e.dataLevel,\n            n = e.schema[r],\n            l = e.schemaPath + e.util.getProperty(r),\n            u = e.errSchemaPath + "/" + r,\n            c = !e.opts.allErrors,\n            h = "data" + (i || ""),\n            d = e.opts.$data && n && n.$data;\n        d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n;\n        var f = "maximum" == r,\n            p = f ? "exclusiveMaximum" : "exclusiveMinimum",\n            m = e.schema[p],\n            v = e.opts.$data && m && m.$data,\n            g = f ? "<" : ">",\n            y = f ? ">" : "<",\n            P = void 0;\n\n        if (v) {\n          var E = e.util.getData(m.$data, i, e.dataPathArr),\n              w = "exclusive" + o,\n              S = "exclType" + o,\n              b = "exclIsNumber" + o,\n              _ = "\' + " + (R = "op" + o) + " + \'";\n\n          s += " var schemaExcl" + o + " = " + E + "; ";\n          var F;\n          P = p, (F = F || []).push(s += " var " + w + "; var " + S + " = typeof " + (E = "schemaExcl" + o) + "; if (" + S + " != \'boolean\' && " + S + " != \'undefined\' && " + S + " != \'number\') { "), s = "", !1 !== e.createErrors ? (s += " { keyword: \'" + (P || "_exclusiveLimit") + "\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: \'" + p + " should be boolean\' "), e.opts.verbose && (s += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";\n          var x = s;\n          s = F.pop(), s += !e.compositeRule && c ? e.async ? " throw new ValidationError([" + x + "]); " : " validate.errors = [" + x + "]; return false; " : " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != \'number\') || "), s += " " + S + " == \'number\' ? ( (" + w + " = " + a + " === undefined || " + E + " " + g + "= " + a + ") ? " + h + " " + y + "= " + E + " : " + h + " " + y + " " + a + " ) : ( (" + w + " = " + E + " === true) ? " + h + " " + y + "= " + a + " : " + h + " " + y + " " + a + " ) || " + h + " !== " + h + ") { var op" + o + " = " + w + " ? \'" + g + "\' : \'" + g + "=\'; ", void 0 === n && (u = e.errSchemaPath + "/" + (P = p), a = E, d = v);\n        } else if (_ = g, (b = "number" == typeof m) && d) {\n          var R = "\'" + _ + "\'";\n          s += " if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != \'number\') || "), s += " ( " + a + " === undefined || " + m + " " + g + "= " + a + " ? " + h + " " + y + "= " + m + " : " + h + " " + y + " " + a + " ) || " + h + " !== " + h + ") { ";\n        } else b && void 0 === n ? (w = !0, u = e.errSchemaPath + "/" + (P = p), a = m, y += "=") : (b && (a = Math[f ? "min" : "max"](m, n)), m === (!b || a) ? (w = !0, u = e.errSchemaPath + "/" + (P = p), y += "=") : (w = !1, _ += "=")), R = "\'" + _ + "\'", s += " if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != \'number\') || "), s += " " + h + " " + y + " " + a + " || " + h + " !== " + h + ") { ";\n\n        return P = P || r, (F = F || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: \'" + (P || "_limit") + "\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { comparison: " + R + ", limit: " + a + ", exclusive: " + w + " } ", !1 !== e.opts.messages && (s += " , message: \'should be " + _ + " ", s += d ? "\' + " + a : a + "\'"), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ", x = s, s = F.pop(), s += !e.compositeRule && c ? e.async ? " throw new ValidationError([" + x + "]); " : " validate.errors = [" + x + "]; return false; " : " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", c && (s += " else { "), s;\n      };\n    }, {}],\n    13: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s = " ",\n            o = e.level,\n            i = e.dataLevel,\n            n = e.schema[r],\n            l = e.schemaPath + e.util.getProperty(r),\n            u = e.errSchemaPath + "/" + r,\n            c = !e.opts.allErrors,\n            h = "data" + (i || ""),\n            d = e.opts.$data && n && n.$data;\n        d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, s += "if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != \'number\') || ");\n        var f = r,\n            p = p || [];\n        p.push(s += " " + h + ".length " + ("maxItems" == r ? ">" : "<") + " " + a + ") { "), s = "", !1 !== e.createErrors ? (s += " { keyword: \'" + (f || "_limitItems") + "\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (s += " , message: \'should NOT have ", s += "maxItems" == r ? "more" : "less", s += " than ", s += d ? "\' + " + a + " + \'" : "" + n, s += " items\' "), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";\n        var m = s;\n        return s = p.pop(), s += !e.compositeRule && c ? e.async ? " throw new ValidationError([" + m + "]); " : " validate.errors = [" + m + "]; return false; " : " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", c && (s += " else { "), s;\n      };\n    }, {}],\n    14: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s = " ",\n            o = e.level,\n            i = e.dataLevel,\n            n = e.schema[r],\n            l = e.schemaPath + e.util.getProperty(r),\n            u = e.errSchemaPath + "/" + r,\n            c = !e.opts.allErrors,\n            h = "data" + (i || ""),\n            d = e.opts.$data && n && n.$data;\n        d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, s += "if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != \'number\') || "), s += !1 === e.opts.unicode ? " " + h + ".length " : " ucs2length(" + h + ") ";\n        var f = r,\n            p = p || [];\n        p.push(s += " " + ("maxLength" == r ? ">" : "<") + " " + a + ") { "), s = "", !1 !== e.createErrors ? (s += " { keyword: \'" + (f || "_limitLength") + "\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (s += " , message: \'should NOT be ", s += "maxLength" == r ? "longer" : "shorter", s += " than ", s += d ? "\' + " + a + " + \'" : "" + n, s += " characters\' "), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";\n        var m = s;\n        return s = p.pop(), s += !e.compositeRule && c ? e.async ? " throw new ValidationError([" + m + "]); " : " validate.errors = [" + m + "]; return false; " : " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", c && (s += " else { "), s;\n      };\n    }, {}],\n    15: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s = " ",\n            o = e.level,\n            i = e.dataLevel,\n            n = e.schema[r],\n            l = e.schemaPath + e.util.getProperty(r),\n            u = e.errSchemaPath + "/" + r,\n            c = !e.opts.allErrors,\n            h = "data" + (i || ""),\n            d = e.opts.$data && n && n.$data;\n        d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, s += "if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != \'number\') || ");\n        var f = r,\n            p = p || [];\n        p.push(s += " Object.keys(" + h + ").length " + ("maxProperties" == r ? ">" : "<") + " " + a + ") { "), s = "", !1 !== e.createErrors ? (s += " { keyword: \'" + (f || "_limitProperties") + "\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (s += " , message: \'should NOT have ", s += "maxProperties" == r ? "more" : "less", s += " than ", s += d ? "\' + " + a + " + \'" : "" + n, s += " properties\' "), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";\n        var m = s;\n        return s = p.pop(), s += !e.compositeRule && c ? e.async ? " throw new ValidationError([" + m + "]); " : " validate.errors = [" + m + "]; return false; " : " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", c && (s += " else { "), s;\n      };\n    }, {}],\n    16: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.schema[r],\n            o = e.schemaPath + e.util.getProperty(r),\n            i = e.errSchemaPath + "/" + r,\n            n = !e.opts.allErrors,\n            l = e.util.copy(e),\n            u = "";\n        l.level++;\n        var c = "valid" + l.level,\n            h = l.baseId,\n            d = !0,\n            f = s;\n        if (f) for (var p, m = -1, v = f.length - 1; m < v;) {\n          p = f[m += 1], e.util.schemaHasRules(p, e.RULES.all) && (d = !1, l.schema = p, l.schemaPath = o + "[" + m + "]", l.errSchemaPath = i + "/" + m, a += "  " + e.validate(l) + " ", l.baseId = h, n && (a += " if (" + c + ") { ", u += "}"));\n        }\n        return n && (a += d ? " if (true) { " : " " + u.slice(0, -1) + " "), a = e.util.cleanUpCode(a);\n      };\n    }, {}],\n    17: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (r, e, t) {\n        var a = " ",\n            s = r.level,\n            o = r.dataLevel,\n            i = r.schema[e],\n            n = r.schemaPath + r.util.getProperty(e),\n            l = r.errSchemaPath + "/" + e,\n            u = !r.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "valid" + s,\n            d = "errs__" + s,\n            f = r.util.copy(r),\n            p = "";\n        f.level++;\n        var m = "valid" + f.level;\n\n        if (i.every(function (e) {\n          return r.util.schemaHasRules(e, r.RULES.all);\n        })) {\n          var v = f.baseId;\n          a += " var " + d + " = errors; var " + h + " = false;  ";\n          var g = r.compositeRule;\n          r.compositeRule = f.compositeRule = !0;\n          var y = i;\n          if (y) for (var P, E = -1, w = y.length - 1; E < w;) {\n            P = y[E += 1], f.schema = P, f.schemaPath = n + "[" + E + "]", f.errSchemaPath = l + "/" + E, a += "  " + r.validate(f) + " ", f.baseId = v, a += " " + h + " = " + h + " || " + m + "; if (!" + h + ") { ", p += "}";\n          }\n          r.compositeRule = f.compositeRule = g, a += " " + p + " if (!" + h + ") {   var err =   ", !1 !== r.createErrors ? (a += " { keyword: \'anyOf\' , dataPath: (dataPath || \'\') + " + r.errorPath + " , schemaPath: " + r.util.toQuotedString(l) + " , params: {} ", !1 !== r.opts.messages && (a += " , message: \'should match some schema in anyOf\' "), r.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + r.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !r.compositeRule && u && (a += r.async ? " throw new ValidationError(vErrors); " : " validate.errors = vErrors; return false; "), a += " } else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } ", r.opts.allErrors && (a += " } "), a = r.util.cleanUpCode(a);\n        } else u && (a += " if (true) { ");\n\n        return a;\n      };\n    }, {}],\n    18: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.errSchemaPath + "/" + r,\n            o = e.util.toQuotedString(e.schema[r]);\n        return !0 === e.opts.$comment ? a += " ;" : "function" == typeof e.opts.$comment && (a += " self._opts.$comment(" + o + ", " + e.util.toQuotedString(s) + ", validate.root.schema);"), a;\n      };\n    }, {}],\n    19: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "valid" + s,\n            d = e.opts.$data && i && i.$data;\n        d && (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; "), d || (a += " var schema" + s + " = validate.schema" + n + ";");\n        var f = f || [];\n        f.push(a += "var " + h + " = equal(" + c + ", schema" + s + "); if (!" + h + ") {   "), a = "", !1 !== e.createErrors ? (a += " { keyword: \'const\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { allowedValue: schema" + s + " } ", !1 !== e.opts.messages && (a += " , message: \'should be equal to constant\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n        var p = a;\n        return a = f.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + p + "]); " : " validate.errors = [" + p + "]; return false; " : " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " }", u && (a += " else { "), a;\n      };\n    }, {}],\n    20: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "valid" + s,\n            d = "errs__" + s,\n            f = e.util.copy(e);\n        f.level++;\n        var p = "valid" + f.level,\n            m = "i" + s,\n            v = f.dataLevel = e.dataLevel + 1,\n            g = "data" + v,\n            y = e.baseId,\n            P = e.util.schemaHasRules(i, e.RULES.all);\n\n        if (a += "var " + d + " = errors;var " + h + ";", P) {\n          var E = e.compositeRule;\n          e.compositeRule = f.compositeRule = !0, f.schema = i, f.schemaPath = n, f.errSchemaPath = l, a += " var " + p + " = false; for (var " + m + " = 0; " + m + " < " + c + ".length; " + m + "++) { ", f.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0);\n          var w = c + "[" + m + "]";\n          f.dataPathArr[v] = m;\n          var S = e.validate(f);\n          f.baseId = y, e.util.varOccurences(S, g) < 2 ? a += " " + e.util.varReplace(S, g, w) + " " : a += " var " + g + " = " + w + "; " + S + " ", a += " if (" + p + ") break; }  ", e.compositeRule = f.compositeRule = E, a += "  if (!" + p + ") {";\n        } else a += " if (" + c + ".length == 0) {";\n\n        var b = b || [];\n        b.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: \'contains\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: \'should contain a valid item\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n        var _ = a;\n        return a = b.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + _ + "]); " : " validate.errors = [" + _ + "]; return false; " : " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { ", P && (a += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } "), e.opts.allErrors && (a += " } "), a = e.util.cleanUpCode(a);\n      };\n    }, {}],\n    21: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s,\n            o = " ",\n            i = e.level,\n            n = e.dataLevel,\n            l = e.schema[r],\n            u = e.schemaPath + e.util.getProperty(r),\n            c = e.errSchemaPath + "/" + r,\n            h = !e.opts.allErrors,\n            d = "data" + (n || ""),\n            f = "valid" + i,\n            p = "errs__" + i,\n            m = e.opts.$data && l && l.$data;\n        m ? (o += " var schema" + i + " = " + e.util.getData(l.$data, n, e.dataPathArr) + "; ", s = "schema" + i) : s = l;\n        var v,\n            g,\n            y,\n            P,\n            E,\n            w = this,\n            S = "definition" + i,\n            b = w.definition,\n            _ = "";\n\n        if (m && b.$data) {\n          var F = b.validateSchema;\n          o += " var " + S + " = RULES.custom[\'" + r + "\'].definition; var " + (E = "keywordValidate" + i) + " = " + S + ".validate;";\n        } else {\n          if (!(P = e.useCustomRule(w, l, e.schema, e))) return;\n          s = "validate.schema" + u, E = P.code, v = b.compile, g = b.inline, y = b.macro;\n        }\n\n        var x = E + ".errors",\n            R = "i" + i,\n            $ = "ruleErr" + i,\n            D = b.async;\n        if (D && !e.async) throw new Error("async keyword in sync schema");\n        if (g || y || (o += x + " = null;"), o += "var " + p + " = errors;var " + f + ";", m && b.$data && (_ += "}", o += " if (" + s + " === undefined) { " + f + " = true; } else { ", F && (_ += "}", o += " " + f + " = " + S + ".validateSchema(" + s + "); if (" + f + ") { ")), g) o += b.statements ? " " + P.validate + " " : " " + f + " = " + P.validate + "; ";else if (y) {\n          var j = e.util.copy(e);\n          _ = "", j.level++;\n          var I = "valid" + j.level;\n          j.schema = P.validate, j.schemaPath = "";\n          var O = e.compositeRule;\n          e.compositeRule = j.compositeRule = !0;\n          var A = e.validate(j).replace(/validate\\.schema/g, E);\n          e.compositeRule = j.compositeRule = O, o += " " + A;\n        } else {\n          (z = z || []).push(o), o = "", o += "  " + E + ".call( ", o += e.opts.passContext ? "this" : "self", o += v || !1 === b.schema ? " , " + d + " " : " , " + s + " , " + d + " , validate.schema" + e.schemaPath + " ", o += " , (dataPath || \'\')", \'""\' != e.errorPath && (o += " + " + e.errorPath);\n          var C = n ? "data" + (n - 1 || "") : "parentData",\n              k = n ? e.dataPathArr[n] : "parentDataProperty",\n              L = o += " , " + C + " , " + k + " , rootData )  ";\n          o = z.pop(), !1 === b.errors ? (o += " " + f + " = ", D && (o += "await "), o += L + "; ") : o += D ? " var " + (x = "customErrors" + i) + " = null; try { " + f + " = await " + L + "; } catch (e) { " + f + " = false; if (e instanceof ValidationError) " + x + " = e.errors; else throw e; } " : " " + x + " = null; " + f + " = " + L + "; ";\n        }\n        if (b.modifying && (o += " if (" + C + ") " + d + " = " + C + "[" + k + "];"), o += "" + _, b.valid) h && (o += " if (true) { ");else {\n          var z;\n          o += " if ( ", void 0 === b.valid ? (o += " !", o += y ? "" + I : "" + f) : o += " " + !b.valid + " ", a = w.keyword, (z = z || []).push(o += ") { "), (z = z || []).push(o = ""), o = "", !1 !== e.createErrors ? (o += " { keyword: \'" + (a || "custom") + "\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { keyword: \'" + w.keyword + "\' } ", !1 !== e.opts.messages && (o += " , message: \'should pass \\"" + w.keyword + "\\" keyword validation\' "), e.opts.verbose && (o += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), o += " } ") : o += " {} ";\n          var T = o;\n          o = z.pop();\n          var N = o += !e.compositeRule && h ? e.async ? " throw new ValidationError([" + T + "]); " : " validate.errors = [" + T + "]; return false; " : " var err = " + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";\n          o = z.pop(), g ? b.errors ? "full" != b.errors && (o += "  for (var " + R + "=" + p + "; " + R + "<errors; " + R + "++) { var " + $ + " = vErrors[" + R + "]; if (" + $ + ".dataPath === undefined) " + $ + ".dataPath = (dataPath || \'\') + " + e.errorPath + "; if (" + $ + ".schemaPath === undefined) { " + $ + \'.schemaPath = "\' + c + \'"; } \', e.opts.verbose && (o += " " + $ + ".schema = " + s + "; " + $ + ".data = " + d + "; "), o += " } ") : !1 === b.errors ? o += " " + N + " " : (o += " if (" + p + " == errors) { " + N + " } else {  for (var " + R + "=" + p + "; " + R + "<errors; " + R + "++) { var " + $ + " = vErrors[" + R + "]; if (" + $ + ".dataPath === undefined) " + $ + ".dataPath = (dataPath || \'\') + " + e.errorPath + "; if (" + $ + ".schemaPath === undefined) { " + $ + \'.schemaPath = "\' + c + \'"; } \', e.opts.verbose && (o += " " + $ + ".schema = " + s + "; " + $ + ".data = " + d + "; "), o += " } } ") : y ? (o += "   var err =   ", !1 !== e.createErrors ? (o += " { keyword: \'" + (a || "custom") + "\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { keyword: \'" + w.keyword + "\' } ", !1 !== e.opts.messages && (o += " , message: \'should pass \\"" + w.keyword + "\\" keyword validation\' "), e.opts.verbose && (o += " , schema: validate.schema" + u + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), o += " } ") : o += " {} ", o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (o += e.async ? " throw new ValidationError(vErrors); " : " validate.errors = vErrors; return false; ")) : !1 === b.errors ? o += " " + N + " " : (o += " if (Array.isArray(" + x + ")) { if (vErrors === null) vErrors = " + x + "; else vErrors = vErrors.concat(" + x + "); errors = vErrors.length;  for (var " + R + "=" + p + "; " + R + "<errors; " + R + "++) { var " + $ + " = vErrors[" + R + "]; if (" + $ + ".dataPath === undefined) " + $ + ".dataPath = (dataPath || \'\') + " + e.errorPath + ";  " + $ + \'.schemaPath = "\' + c + \'";  \', e.opts.verbose && (o += " " + $ + ".schema = " + s + "; " + $ + ".data = " + d + "; "), o += " } } else { " + N + " } "), o += " } ", h && (o += " else { ");\n        }\n        return o;\n      };\n    }, {}],\n    22: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "errs__" + s,\n            d = e.util.copy(e),\n            f = "";\n        d.level++;\n        var p = "valid" + d.level,\n            m = {},\n            v = {},\n            g = e.opts.ownProperties;\n\n        for (w in i) {\n          var y = i[w],\n              P = Array.isArray(y) ? v : m;\n          P[w] = y;\n        }\n\n        a += "var " + h + " = errors;";\n        var E = e.errorPath;\n\n        for (var w in a += "var missing" + s + ";", v) {\n          if ((P = v[w]).length) {\n            if (a += " if ( " + c + e.util.getProperty(w) + " !== undefined ", g && (a += " && Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(w) + "\') "), u) {\n              a += " && ( ";\n              var S = P;\n              if (S) for (var b = -1, _ = S.length - 1; b < _;) {\n                j = S[b += 1], b && (a += " || "), a += " ( ( " + (C = c + (A = e.util.getProperty(j))) + " === undefined ", g && (a += " || ! Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(j) + "\') "), a += ") && (missing" + s + " = " + e.util.toQuotedString(e.opts.jsonPointers ? j : A) + ") ) ";\n              }\n              a += ")) {  ";\n              var F = "missing" + s,\n                  x = "\' + " + F + " + \'";\n              e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(E, F, !0) : E + " + " + F);\n              var R = R || [];\n              R.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: \'dependencies\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { property: \'" + e.util.escapeQuotes(w) + "\', missingProperty: \'" + x + "\', depsCount: " + P.length + ", deps: \'" + e.util.escapeQuotes(1 == P.length ? P[0] : P.join(", ")) + "\' } ", !1 !== e.opts.messages && (a += " , message: \'should have ", a += 1 == P.length ? "property " + e.util.escapeQuotes(P[0]) : "properties " + e.util.escapeQuotes(P.join(", ")), a += " when property " + e.util.escapeQuotes(w) + " is present\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n              var $ = a;\n              a = R.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + $ + "]); " : " validate.errors = [" + $ + "]; return false; " : " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";\n            } else {\n              a += " ) { ";\n              var D = P;\n              if (D) for (var j, I = -1, O = D.length - 1; I < O;) {\n                j = D[I += 1];\n                var A = e.util.getProperty(j),\n                    C = (x = e.util.escapeQuotes(j), c + A);\n                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(E, j, e.opts.jsonPointers)), a += " if ( " + C + " === undefined ", g && (a += " || ! Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(j) + "\') "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: \'dependencies\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { property: \'" + e.util.escapeQuotes(w) + "\', missingProperty: \'" + x + "\', depsCount: " + P.length + ", deps: \'" + e.util.escapeQuotes(1 == P.length ? P[0] : P.join(", ")) + "\' } ", !1 !== e.opts.messages && (a += " , message: \'should have ", a += 1 == P.length ? "property " + e.util.escapeQuotes(P[0]) : "properties " + e.util.escapeQuotes(P.join(", ")), a += " when property " + e.util.escapeQuotes(w) + " is present\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";\n              }\n            }\n\n            a += " }   ", u && (f += "}", a += " else { ");\n          }\n        }\n\n        e.errorPath = E;\n        var k = d.baseId;\n\n        for (var w in m) {\n          e.util.schemaHasRules(y = m[w], e.RULES.all) && (a += " " + p + " = true; if ( " + c + e.util.getProperty(w) + " !== undefined ", g && (a += " && Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(w) + "\') "), a += ") { ", d.schema = y, d.schemaPath = n + e.util.getProperty(w), d.errSchemaPath = l + "/" + e.util.escapeFragment(w), a += "  " + e.validate(d) + " ", d.baseId = k, a += " }  ", u && (a += " if (" + p + ") { ", f += "}"));\n        }\n\n        return u && (a += "   " + f + " if (" + h + " == errors) {"), a = e.util.cleanUpCode(a);\n      };\n    }, {}],\n    23: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "valid" + s,\n            d = e.opts.$data && i && i.$data;\n        d && (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ");\n        var f = "i" + s,\n            p = "schema" + s;\n        d || (a += " var " + p + " = validate.schema" + n + ";"), a += "var " + h + ";", d && (a += " if (schema" + s + " === undefined) " + h + " = true; else if (!Array.isArray(schema" + s + ")) " + h + " = false; else {"), a += h + " = false;for (var " + f + "=0; " + f + "<" + p + ".length; " + f + "++) if (equal(" + c + ", " + p + "[" + f + "])) { " + h + " = true; break; }", d && (a += "  }  ");\n        var m = m || [];\n        m.push(a += " if (!" + h + ") {   "), a = "", !1 !== e.createErrors ? (a += " { keyword: \'enum\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { allowedValues: schema" + s + " } ", !1 !== e.opts.messages && (a += " , message: \'should be equal to one of the allowed values\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n        var v = a;\n        return a = m.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + v + "]); " : " validate.errors = [" + v + "]; return false; " : " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " }", u && (a += " else { "), a;\n      };\n    }, {}],\n    24: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || "");\n        if (!1 === e.opts.format) return u && (a += " if (true) { "), a;\n        var h,\n            d = e.opts.$data && i && i.$data;\n        d ? (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", h = "schema" + s) : h = i;\n        var f = e.opts.unknownFormats,\n            p = Array.isArray(f);\n        if (d) a += " var " + (m = "format" + s) + " = formats[" + h + "]; var " + (v = "isObject" + s) + " = typeof " + m + " == \'object\' && !(" + m + " instanceof RegExp) && " + m + ".validate; var " + (g = "formatType" + s) + " = " + v + " && " + m + ".type || \'string\'; if (" + v + ") { ", e.async && (a += " var async" + s + " = " + m + ".async; "), a += " " + m + " = " + m + ".validate; } if (  ", d && (a += " (" + h + " !== undefined && typeof " + h + " != \'string\') || "), a += " (", "ignore" != f && (a += " (" + h + " && !" + m + " ", p && (a += " && self._opts.unknownFormats.indexOf(" + h + ") == -1 "), a += ") || "), a += " (" + m + " && " + g + " == \'" + t + "\' && !(typeof " + m + " == \'function\' ? ", a += e.async ? " (async" + s + " ? await " + m + "(" + c + ") : " + m + "(" + c + ")) " : " " + m + "(" + c + ") ", a += " : " + m + ".test(" + c + "))))) {";else {\n          var m;\n\n          if (!(m = e.formats[i])) {\n            if ("ignore" == f) return e.logger.warn(\'unknown format "\' + i + \'" ignored in schema at path "\' + e.errSchemaPath + \'"\'), u && (a += " if (true) { "), a;\n            if (p && 0 <= f.indexOf(i)) return u && (a += " if (true) { "), a;\n            throw new Error(\'unknown format "\' + i + \'" is used in schema at path "\' + e.errSchemaPath + \'"\');\n          }\n\n          var v,\n              g = (v = "object" == _typeof(m) && !(m instanceof RegExp) && m.validate) && m.type || "string";\n\n          if (v) {\n            var y = !0 === m.async;\n            m = m.validate;\n          }\n\n          if (g != t) return u && (a += " if (true) { "), a;\n\n          if (y) {\n            if (!e.async) throw new Error("async format in sync schema");\n            a += " if (!(await " + (P = "formats" + e.util.getProperty(i) + ".validate") + "(" + c + "))) { ";\n          } else {\n            a += " if (! ";\n            var P = "formats" + e.util.getProperty(i);\n            v && (P += ".validate"), a += "function" == typeof m ? " " + P + "(" + c + ") " : " " + P + ".test(" + c + ") ", a += ") { ";\n          }\n        }\n        var E = E || [];\n        E.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: \'format\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { format:  ", a += d ? "" + h : "" + e.util.toQuotedString(i), a += "  } ", !1 !== e.opts.messages && (a += " , message: \'should match format \\"", a += d ? "\' + " + h + " + \'" : "" + e.util.escapeQuotes(i), a += "\\"\' "), e.opts.verbose && (a += " , schema:  ", a += d ? "validate.schema" + n : "" + e.util.toQuotedString(i), a += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n        var w = a;\n        return a = E.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + w + "]); " : " validate.errors = [" + w + "]; return false; " : " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } ", u && (a += " else { "), a;\n      };\n    }, {}],\n    25: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "valid" + s,\n            d = "errs__" + s,\n            f = e.util.copy(e);\n        f.level++;\n        var p = "valid" + f.level,\n            m = e.schema.then,\n            v = e.schema.else,\n            g = void 0 !== m && e.util.schemaHasRules(m, e.RULES.all),\n            y = void 0 !== v && e.util.schemaHasRules(v, e.RULES.all),\n            P = f.baseId;\n\n        if (g || y) {\n          var E;\n          f.createErrors = !1, f.schema = i, f.schemaPath = n, f.errSchemaPath = l, a += " var " + d + " = errors; var " + h + " = true;  ";\n          var w = e.compositeRule;\n          e.compositeRule = f.compositeRule = !0, a += "  " + e.validate(f) + " ", f.baseId = P, f.createErrors = !0, a += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }  ", e.compositeRule = f.compositeRule = w, g ? (a += " if (" + p + ") {  ", f.schema = e.schema.then, f.schemaPath = e.schemaPath + ".then", f.errSchemaPath = e.errSchemaPath + "/then", a += "  " + e.validate(f) + " ", f.baseId = P, a += " " + h + " = " + p + "; ", g && y ? a += " var " + (E = "ifClause" + s) + " = \'then\'; " : E = "\'then\'", a += " } ", y && (a += " else { ")) : a += " if (!" + p + ") { ", y && (f.schema = e.schema.else, f.schemaPath = e.schemaPath + ".else", f.errSchemaPath = e.errSchemaPath + "/else", a += "  " + e.validate(f) + " ", f.baseId = P, a += " " + h + " = " + p + "; ", g && y ? a += " var " + (E = "ifClause" + s) + " = \'else\'; " : E = "\'else\'", a += " } "), a += " if (!" + h + ") {   var err =   ", !1 !== e.createErrors ? (a += " { keyword: \'if\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { failingKeyword: " + E + " } ", !1 !== e.opts.messages && (a += " , message: \'should match \\"\' + " + E + " + \'\\" schema\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (a += e.async ? " throw new ValidationError(vErrors); " : " validate.errors = vErrors; return false; "), a += " }   ", u && (a += " else { "), a = e.util.cleanUpCode(a);\n        } else u && (a += " if (true) { ");\n\n        return a;\n      };\n    }, {}],\n    26: [function (e, r, t) {\n      "use strict";\n\n      r.exports = {\n        $ref: e("./ref"),\n        allOf: e("./allOf"),\n        anyOf: e("./anyOf"),\n        $comment: e("./comment"),\n        const: e("./const"),\n        contains: e("./contains"),\n        dependencies: e("./dependencies"),\n        enum: e("./enum"),\n        format: e("./format"),\n        if: e("./if"),\n        items: e("./items"),\n        maximum: e("./_limit"),\n        minimum: e("./_limit"),\n        maxItems: e("./_limitItems"),\n        minItems: e("./_limitItems"),\n        maxLength: e("./_limitLength"),\n        minLength: e("./_limitLength"),\n        maxProperties: e("./_limitProperties"),\n        minProperties: e("./_limitProperties"),\n        multipleOf: e("./multipleOf"),\n        not: e("./not"),\n        oneOf: e("./oneOf"),\n        pattern: e("./pattern"),\n        properties: e("./properties"),\n        propertyNames: e("./propertyNames"),\n        required: e("./required"),\n        uniqueItems: e("./uniqueItems"),\n        validate: e("./validate")\n      };\n    }, {\n      "./_limit": 12,\n      "./_limitItems": 13,\n      "./_limitLength": 14,\n      "./_limitProperties": 15,\n      "./allOf": 16,\n      "./anyOf": 17,\n      "./comment": 18,\n      "./const": 19,\n      "./contains": 20,\n      "./dependencies": 22,\n      "./enum": 23,\n      "./format": 24,\n      "./if": 25,\n      "./items": 27,\n      "./multipleOf": 28,\n      "./not": 29,\n      "./oneOf": 30,\n      "./pattern": 31,\n      "./properties": 32,\n      "./propertyNames": 33,\n      "./ref": 34,\n      "./required": 35,\n      "./uniqueItems": 36,\n      "./validate": 37\n    }],\n    27: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "valid" + s,\n            d = "errs__" + s,\n            f = e.util.copy(e),\n            p = "";\n        f.level++;\n        var m = "valid" + f.level,\n            v = "i" + s,\n            g = f.dataLevel = e.dataLevel + 1,\n            y = "data" + g,\n            P = e.baseId;\n\n        if (a += "var " + d + " = errors;var " + h + ";", Array.isArray(i)) {\n          var E = e.schema.additionalItems;\n\n          if (!1 === E) {\n            a += " " + h + " = " + c + ".length <= " + i.length + "; ";\n            var w = l;\n            l = e.errSchemaPath + "/additionalItems";\n            var S = S || [];\n            S.push(a += "  if (!" + h + ") {   "), a = "", !1 !== e.createErrors ? (a += " { keyword: \'additionalItems\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { limit: " + i.length + " } ", !1 !== e.opts.messages && (a += " , message: \'should NOT have more than " + i.length + " items\' "), e.opts.verbose && (a += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n            var b = a;\n            a = S.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + b + "]); " : " validate.errors = [" + b + "]; return false; " : " var err = " + b + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } ", l = w, u && (p += "}", a += " else { ");\n          }\n\n          var _ = i;\n          if (_) for (var F, x = -1, R = _.length - 1; x < R;) {\n            if (F = _[x += 1], e.util.schemaHasRules(F, e.RULES.all)) {\n              a += " " + m + " = true; if (" + c + ".length > " + x + ") { ";\n              var $ = c + "[" + x + "]";\n              f.schema = F, f.schemaPath = n + "[" + x + "]", f.errSchemaPath = l + "/" + x, f.errorPath = e.util.getPathExpr(e.errorPath, x, e.opts.jsonPointers, !0), f.dataPathArr[g] = x;\n              var D = e.validate(f);\n              f.baseId = P, e.util.varOccurences(D, y) < 2 ? a += " " + e.util.varReplace(D, y, $) + " " : a += " var " + y + " = " + $ + "; " + D + " ", a += " }  ", u && (a += " if (" + m + ") { ", p += "}");\n            }\n          }\n          "object" == _typeof(E) && e.util.schemaHasRules(E, e.RULES.all) && (f.schema = E, f.schemaPath = e.schemaPath + ".additionalItems", f.errSchemaPath = e.errSchemaPath + "/additionalItems", a += " " + m + " = true; if (" + c + ".length > " + i.length + ") {  for (var " + v + " = " + i.length + "; " + v + " < " + c + ".length; " + v + "++) { ", f.errorPath = e.util.getPathExpr(e.errorPath, v, e.opts.jsonPointers, !0), $ = c + "[" + v + "]", f.dataPathArr[g] = v, D = e.validate(f), f.baseId = P, e.util.varOccurences(D, y) < 2 ? a += " " + e.util.varReplace(D, y, $) + " " : a += " var " + y + " = " + $ + "; " + D + " ", u && (a += " if (!" + m + ") break; "), a += " } }  ", u && (a += " if (" + m + ") { ", p += "}"));\n        } else e.util.schemaHasRules(i, e.RULES.all) && (f.schema = i, f.schemaPath = n, f.errSchemaPath = l, a += "  for (var " + v + " = 0; " + v + " < " + c + ".length; " + v + "++) { ", f.errorPath = e.util.getPathExpr(e.errorPath, v, e.opts.jsonPointers, !0), $ = c + "[" + v + "]", f.dataPathArr[g] = v, D = e.validate(f), f.baseId = P, e.util.varOccurences(D, y) < 2 ? a += " " + e.util.varReplace(D, y, $) + " " : a += " var " + y + " = " + $ + "; " + D + " ", u && (a += " if (!" + m + ") break; "), a += " }");\n\n        return u && (a += " " + p + " if (" + d + " == errors) {"), a = e.util.cleanUpCode(a);\n      };\n    }, {}],\n    28: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s = " ",\n            o = e.level,\n            i = e.dataLevel,\n            n = e.schema[r],\n            l = e.schemaPath + e.util.getProperty(r),\n            u = e.errSchemaPath + "/" + r,\n            c = !e.opts.allErrors,\n            h = "data" + (i || ""),\n            d = e.opts.$data && n && n.$data;\n        d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, s += "var division" + o + ";if (", d && (s += " " + a + " !== undefined && ( typeof " + a + " != \'number\' || "), s += " (division" + o + " = " + h + " / " + a + ", ", s += e.opts.multipleOfPrecision ? " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " " : " division" + o + " !== parseInt(division" + o + ") ", s += " ) ", d && (s += "  )  ");\n        var f = f || [];\n        f.push(s += " ) {   "), s = "", !1 !== e.createErrors ? (s += " { keyword: \'multipleOf\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { multipleOf: " + a + " } ", !1 !== e.opts.messages && (s += " , message: \'should be multiple of ", s += d ? "\' + " + a : a + "\'"), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";\n        var p = s;\n        return s = f.pop(), s += !e.compositeRule && c ? e.async ? " throw new ValidationError([" + p + "]); " : " validate.errors = [" + p + "]; return false; " : " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", c && (s += " else { "), s;\n      };\n    }, {}],\n    29: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "errs__" + s,\n            d = e.util.copy(e);\n        d.level++;\n        var f = "valid" + d.level;\n\n        if (e.util.schemaHasRules(i, e.RULES.all)) {\n          d.schema = i, d.schemaPath = n, d.errSchemaPath = l, a += " var " + h + " = errors;  ";\n          var p,\n              m = e.compositeRule;\n          e.compositeRule = d.compositeRule = !0, d.createErrors = !1, d.opts.allErrors && (p = d.opts.allErrors, d.opts.allErrors = !1), a += " " + e.validate(d) + " ", d.createErrors = !0, p && (d.opts.allErrors = p), e.compositeRule = d.compositeRule = m;\n          var v = v || [];\n          v.push(a += " if (" + f + ") {   "), a = "", !1 !== e.createErrors ? (a += " { keyword: \'not\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: \'should NOT be valid\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n          var g = a;\n          a = v.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + g + "]); " : " validate.errors = [" + g + "]; return false; " : " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else {  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; } ", e.opts.allErrors && (a += " } ");\n        } else a += "  var err =   ", !1 !== e.createErrors ? (a += " { keyword: \'not\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: \'should NOT be valid\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u && (a += " if (false) { ");\n\n        return a;\n      };\n    }, {}],\n    30: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "valid" + s,\n            d = "errs__" + s,\n            f = e.util.copy(e),\n            p = "";\n        f.level++;\n        var m = "valid" + f.level,\n            v = f.baseId,\n            g = "prevValid" + s,\n            y = "passingSchemas" + s;\n        a += "var " + d + " = errors , " + g + " = false , " + h + " = false , " + y + " = null; ";\n        var P = e.compositeRule;\n        e.compositeRule = f.compositeRule = !0;\n        var E = i;\n        if (E) for (var w, S = -1, b = E.length - 1; S < b;) {\n          w = E[S += 1], e.util.schemaHasRules(w, e.RULES.all) ? (f.schema = w, f.schemaPath = n + "[" + S + "]", f.errSchemaPath = l + "/" + S, a += "  " + e.validate(f) + " ", f.baseId = v) : a += " var " + m + " = true; ", S && (a += " if (" + m + " && " + g + ") { " + h + " = false; " + y + " = [" + y + ", " + S + "]; } else { ", p += "}"), a += " if (" + m + ") { " + h + " = " + g + " = true; " + y + " = " + S + "; }";\n        }\n        return e.compositeRule = f.compositeRule = P, a += p + "if (!" + h + ") {   var err =   ", !1 !== e.createErrors ? (a += " { keyword: \'oneOf\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { passingSchemas: " + y + " } ", !1 !== e.opts.messages && (a += " , message: \'should match exactly one schema in oneOf\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (a += e.async ? " throw new ValidationError(vErrors); " : " validate.errors = vErrors; return false; "), a += "} else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }", e.opts.allErrors && (a += " } "), a;\n      };\n    }, {}],\n    31: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s = " ",\n            o = e.level,\n            i = e.dataLevel,\n            n = e.schema[r],\n            l = e.schemaPath + e.util.getProperty(r),\n            u = e.errSchemaPath + "/" + r,\n            c = !e.opts.allErrors,\n            h = "data" + (i || ""),\n            d = e.opts.$data && n && n.$data;\n        d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n;\n        var f = d ? "(new RegExp(" + a + "))" : e.usePattern(n);\n        s += "if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != \'string\') || ");\n        var p = p || [];\n        p.push(s += " !" + f + ".test(" + h + ") ) {   "), s = "", !1 !== e.createErrors ? (s += " { keyword: \'pattern\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { pattern:  ", s += d ? "" + a : "" + e.util.toQuotedString(n), s += "  } ", !1 !== e.opts.messages && (s += " , message: \'should match pattern \\"", s += d ? "\' + " + a + " + \'" : "" + e.util.escapeQuotes(n), s += "\\"\' "), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + e.util.toQuotedString(n), s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";\n        var m = s;\n        return s = p.pop(), s += !e.compositeRule && c ? e.async ? " throw new ValidationError([" + m + "]); " : " validate.errors = [" + m + "]; return false; " : " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", c && (s += " else { "), s;\n      };\n    }, {}],\n    32: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "errs__" + s,\n            d = e.util.copy(e),\n            f = "";\n        d.level++;\n\n        var p = "valid" + d.level,\n            m = "key" + s,\n            v = "idx" + s,\n            g = d.dataLevel = e.dataLevel + 1,\n            y = "data" + g,\n            P = "dataProperties" + s,\n            E = Object.keys(i || {}),\n            w = e.schema.patternProperties || {},\n            S = Object.keys(w),\n            b = e.schema.additionalProperties,\n            _ = E.length || S.length,\n            F = !1 === b,\n            x = "object" == _typeof(b) && Object.keys(b).length,\n            R = e.opts.removeAdditional,\n            $ = F || x || R,\n            D = e.opts.ownProperties,\n            j = e.baseId,\n            I = e.schema.required;\n\n        if (I && (!e.opts.$data || !I.$data) && I.length < e.opts.loopRequired) var O = e.util.toHash(I);\n\n        if (a += "var " + h + " = errors;var " + p + " = true;", D && (a += " var " + P + " = undefined;"), $) {\n          if (a += D ? " " + P + " = " + P + " || Object.keys(" + c + "); for (var " + v + "=0; " + v + "<" + P + ".length; " + v + "++) { var " + m + " = " + P + "[" + v + "]; " : " for (var " + m + " in " + c + ") { ", _) {\n            if (a += " var isAdditional" + s + " = !(false ", E.length) if (8 < E.length) a += " || validate.schema" + n + ".hasOwnProperty(" + m + ") ";else {\n              var A = E;\n              if (A) for (var C = -1, k = A.length - 1; C < k;) {\n                J = A[C += 1], a += " || " + m + " == " + e.util.toQuotedString(J) + " ";\n              }\n            }\n\n            if (S.length) {\n              var L = S;\n              if (L) for (var z = -1, T = L.length - 1; z < T;) {\n                ae = L[z += 1], a += " || " + e.usePattern(ae) + ".test(" + m + ") ";\n              }\n            }\n\n            a += " ); if (isAdditional" + s + ") { ";\n          }\n\n          if ("all" == R) a += " delete " + c + "[" + m + "]; ";else {\n            var N = e.errorPath,\n                q = "\' + " + m + " + \'";\n            if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers)), F) {\n              if (R) a += " delete " + c + "[" + m + "]; ";else {\n                var U = l;\n                l = e.errSchemaPath + "/additionalProperties", (ee = ee || []).push(a += " " + p + " = false; "), a = "", !1 !== e.createErrors ? (a += " { keyword: \'additionalProperties\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { additionalProperty: \'" + q + "\' } ", !1 !== e.opts.messages && (a += " , message: \'", a += e.opts._errorDataPathProperty ? "is an invalid additional property" : "should NOT have additional properties", a += "\' "), e.opts.verbose && (a += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n                var Q = a;\n                a = ee.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + Q + "]); " : " validate.errors = [" + Q + "]; return false; " : " var err = " + Q + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l = U, u && (a += " break; ");\n              }\n            } else if (x) if ("failing" == R) {\n              a += " var " + h + " = errors;  ";\n              var V = e.compositeRule;\n              e.compositeRule = d.compositeRule = !0, d.schema = b, d.schemaPath = e.schemaPath + ".additionalProperties", d.errSchemaPath = e.errSchemaPath + "/additionalProperties", d.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);\n              var H = c + "[" + m + "]";\n              d.dataPathArr[g] = m;\n              var M = e.validate(d);\n              d.baseId = j, e.util.varOccurences(M, y) < 2 ? a += " " + e.util.varReplace(M, y, H) + " " : a += " var " + y + " = " + H + "; " + M + " ", a += " if (!" + p + ") { errors = " + h + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + c + "[" + m + "]; }  ", e.compositeRule = d.compositeRule = V;\n            } else d.schema = b, d.schemaPath = e.schemaPath + ".additionalProperties", d.errSchemaPath = e.errSchemaPath + "/additionalProperties", d.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers), H = c + "[" + m + "]", d.dataPathArr[g] = m, M = e.validate(d), d.baseId = j, e.util.varOccurences(M, y) < 2 ? a += " " + e.util.varReplace(M, y, H) + " " : a += " var " + y + " = " + H + "; " + M + " ", u && (a += " if (!" + p + ") break; ");\n            e.errorPath = N;\n          }\n          _ && (a += " } "), a += " }  ", u && (a += " if (" + p + ") { ", f += "}");\n        }\n\n        var B = e.opts.useDefaults && !e.compositeRule;\n\n        if (E.length) {\n          var K = E;\n          if (K) for (var J, Z = -1, G = K.length - 1; Z < G;) {\n            if (J = K[Z += 1], e.util.schemaHasRules(ie = i[J], e.RULES.all)) {\n              var Y = e.util.getProperty(J),\n                  W = (H = c + Y, B && void 0 !== ie.default);\n\n              if (d.schema = ie, d.schemaPath = n + Y, d.errSchemaPath = l + "/" + e.util.escapeFragment(J), d.errorPath = e.util.getPath(e.errorPath, J, e.opts.jsonPointers), d.dataPathArr[g] = e.util.toQuotedString(J), M = e.validate(d), d.baseId = j, e.util.varOccurences(M, y) < 2) {\n                M = e.util.varReplace(M, y, H);\n                var X = H;\n              } else X = y, a += " var " + y + " = " + H + "; ";\n\n              if (W) a += " " + M + " ";else {\n                if (O && O[J]) {\n                  a += " if ( " + X + " === undefined ", D && (a += " || ! Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(J) + "\') "), a += ") { " + p + " = false; ", N = e.errorPath, U = l;\n                  var ee,\n                      re = e.util.escapeQuotes(J);\n                  e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(N, J, e.opts.jsonPointers)), l = e.errSchemaPath + "/required", (ee = ee || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: \'required\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: \'" + re + "\' } ", !1 !== e.opts.messages && (a += " , message: \'", a += e.opts._errorDataPathProperty ? "is a required property" : "should have required property \\\\\'" + re + "\\\\\'", a += "\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", Q = a, a = ee.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + Q + "]); " : " validate.errors = [" + Q + "]; return false; " : " var err = " + Q + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l = U, e.errorPath = N, a += " } else { ";\n                } else u ? (a += " if ( " + X + " === undefined ", D && (a += " || ! Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(J) + "\') "), a += ") { " + p + " = true; } else { ") : (a += " if (" + X + " !== undefined ", D && (a += " &&   Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(J) + "\') "), a += " ) { ");\n\n                a += " " + M + " } ";\n              }\n            }\n\n            u && (a += " if (" + p + ") { ", f += "}");\n          }\n        }\n\n        if (S.length) {\n          var te = S;\n          if (te) for (var ae, se = -1, oe = te.length - 1; se < oe;) {\n            var ie;\n            ae = te[se += 1], e.util.schemaHasRules(ie = w[ae], e.RULES.all) && (d.schema = ie, d.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(ae), d.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(ae), a += D ? " " + P + " = " + P + " || Object.keys(" + c + "); for (var " + v + "=0; " + v + "<" + P + ".length; " + v + "++) { var " + m + " = " + P + "[" + v + "]; " : " for (var " + m + " in " + c + ") { ", a += " if (" + e.usePattern(ae) + ".test(" + m + ")) { ", d.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers), H = c + "[" + m + "]", d.dataPathArr[g] = m, M = e.validate(d), d.baseId = j, e.util.varOccurences(M, y) < 2 ? a += " " + e.util.varReplace(M, y, H) + " " : a += " var " + y + " = " + H + "; " + M + " ", u && (a += " if (!" + p + ") break; "), a += " } ", u && (a += " else " + p + " = true; "), a += " }  ", u && (a += " if (" + p + ") { ", f += "}"));\n          }\n        }\n\n        return u && (a += " " + f + " if (" + h + " == errors) {"), a = e.util.cleanUpCode(a);\n      };\n    }, {}],\n    33: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "errs__" + s,\n            d = e.util.copy(e);\n        d.level++;\n        var f = "valid" + d.level;\n\n        if (e.util.schemaHasRules(i, e.RULES.all)) {\n          d.schema = i, d.schemaPath = n, d.errSchemaPath = l;\n          var p = "key" + s,\n              m = "idx" + s,\n              v = "i" + s,\n              g = "\' + " + p + " + \'",\n              y = "data" + (d.dataLevel = e.dataLevel + 1),\n              P = "dataProperties" + s,\n              E = e.opts.ownProperties,\n              w = e.baseId;\n          a += " var " + h + " = errors; ", E && (a += " var " + P + " = undefined; "), a += E ? " " + P + " = " + P + " || Object.keys(" + c + "); for (var " + m + "=0; " + m + "<" + P + ".length; " + m + "++) { var " + p + " = " + P + "[" + m + "]; " : " for (var " + p + " in " + c + ") { ", a += " var startErrs" + s + " = errors; ";\n          var S = p,\n              b = e.compositeRule;\n          e.compositeRule = d.compositeRule = !0;\n\n          var _ = e.validate(d);\n\n          d.baseId = w, e.util.varOccurences(_, y) < 2 ? a += " " + e.util.varReplace(_, y, S) + " " : a += " var " + y + " = " + S + "; " + _ + " ", e.compositeRule = d.compositeRule = b, a += " if (!" + f + ") { for (var " + v + "=startErrs" + s + "; " + v + "<errors; " + v + "++) { vErrors[" + v + "].propertyName = " + p + "; }   var err =   ", !1 !== e.createErrors ? (a += " { keyword: \'propertyNames\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { propertyName: \'" + g + "\' } ", !1 !== e.opts.messages && (a += " , message: \'property name \\\\\'" + g + "\\\\\' is invalid\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (a += e.async ? " throw new ValidationError(vErrors); " : " validate.errors = vErrors; return false; "), u && (a += " break; "), a += " } }";\n        }\n\n        return u && (a += "  if (" + h + " == errors) {"), a = e.util.cleanUpCode(a);\n      };\n    }, {}],\n    34: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s,\n            o = " ",\n            i = e.dataLevel,\n            n = e.schema[r],\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (i || ""),\n            h = "valid" + e.level;\n        if ("#" == n || "#/" == n) e.isRoot ? (a = e.async, s = "validate") : (a = !0 === e.root.schema.$async, s = "root.refVal[0]");else {\n          var d = e.resolveRef(e.baseId, n, e.isRoot);\n\n          if (void 0 === d) {\n            var f = e.MissingRefError.message(e.baseId, n);\n\n            if ("fail" == e.opts.missingRefs) {\n              e.logger.error(f), (g = g || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: \'$ref\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { ref: \'" + e.util.escapeQuotes(n) + "\' } ", !1 !== e.opts.messages && (o += " , message: \'can\\\\\'t resolve reference " + e.util.escapeQuotes(n) + "\' "), e.opts.verbose && (o += " , schema: " + e.util.toQuotedString(n) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), o += " } ") : o += " {} ";\n              var p = o;\n              o = g.pop(), o += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + p + "]); " : " validate.errors = [" + p + "]; return false; " : " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u && (o += " if (false) { ");\n            } else {\n              if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, n, f);\n              e.logger.warn(f), u && (o += " if (true) { ");\n            }\n          } else if (d.inline) {\n            var m = e.util.copy(e);\n            m.level++;\n            var v = "valid" + m.level;\n            m.schema = d.schema, m.schemaPath = "", m.errSchemaPath = n, o += " " + e.validate(m).replace(/validate\\.schema/g, d.code) + " ", u && (o += " if (" + v + ") { ");\n          } else a = !0 === d.$async || e.async && !1 !== d.$async, s = d.code;\n        }\n\n        if (s) {\n          var g;\n          (g = g || []).push(o), o = "", o += e.opts.passContext ? " " + s + ".call(this, " : " " + s + "( ", o += " " + c + ", (dataPath || \'\')", \'""\' != e.errorPath && (o += " + " + e.errorPath);\n          var y = o += " , " + (i ? "data" + (i - 1 || "") : "parentData") + " , " + (i ? e.dataPathArr[i] : "parentDataProperty") + ", rootData)  ";\n\n          if (o = g.pop(), a) {\n            if (!e.async) throw new Error("async schema referenced by sync schema");\n            u && (o += " var " + h + "; "), o += " try { await " + y + "; ", u && (o += " " + h + " = true; "), o += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", u && (o += " " + h + " = false; "), o += " } ", u && (o += " if (" + h + ") { ");\n          } else o += " if (!" + y + ") { if (vErrors === null) vErrors = " + s + ".errors; else vErrors = vErrors.concat(" + s + ".errors); errors = vErrors.length; } ", u && (o += " else { ");\n        }\n\n        return o;\n      };\n    }, {}],\n    35: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a = " ",\n            s = e.level,\n            o = e.dataLevel,\n            i = e.schema[r],\n            n = e.schemaPath + e.util.getProperty(r),\n            l = e.errSchemaPath + "/" + r,\n            u = !e.opts.allErrors,\n            c = "data" + (o || ""),\n            h = "valid" + s,\n            d = e.opts.$data && i && i.$data;\n        d && (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ");\n        var f = "schema" + s;\n        if (!d) if (i.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {\n          var p = [],\n              m = i;\n          if (m) for (var v, g = -1, y = m.length - 1; g < y;) {\n            v = m[g += 1];\n            var P = e.schema.properties[v];\n            P && e.util.schemaHasRules(P, e.RULES.all) || (p[p.length] = v);\n          }\n        } else p = i;\n\n        if (d || p.length) {\n          var E = e.errorPath,\n              w = d || e.opts.loopRequired <= p.length,\n              S = e.opts.ownProperties;\n          if (u) {\n            if (a += " var missing" + s + "; ", w) {\n              d || (a += " var " + f + " = validate.schema" + n + "; ");\n              var b = "\' + " + (D = "schema" + s + "[" + (x = "i" + s) + "]") + " + \'";\n              e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(E, D, e.opts.jsonPointers)), a += " var " + h + " = true; ", d && (a += " if (schema" + s + " === undefined) " + h + " = true; else if (!Array.isArray(schema" + s + ")) " + h + " = false; else {"), a += " for (var " + x + " = 0; " + x + " < " + f + ".length; " + x + "++) { " + h + " = " + c + "[" + f + "[" + x + "]] !== undefined ", S && (a += " &&   Object.prototype.hasOwnProperty.call(" + c + ", " + f + "[" + x + "]) "), a += "; if (!" + h + ") break; } ", d && (a += "  }  "), ($ = $ || []).push(a += "  if (!" + h + ") {   "), a = "", !1 !== e.createErrors ? (a += " { keyword: \'required\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: \'" + b + "\' } ", !1 !== e.opts.messages && (a += " , message: \'", a += e.opts._errorDataPathProperty ? "is a required property" : "should have required property \\\\\'" + b + "\\\\\'", a += "\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ";\n              var _ = a;\n              a = $.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + _ + "]); " : " validate.errors = [" + _ + "]; return false; " : " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { ";\n            } else {\n              a += " if ( ";\n              var F = p;\n              if (F) for (var x = -1, R = F.length - 1; x < R;) {\n                I = F[x += 1], x && (a += " || "), a += " ( ( " + (k = c + (C = e.util.getProperty(I))) + " === undefined ", S && (a += " || ! Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(I) + "\') "), a += ") && (missing" + s + " = " + e.util.toQuotedString(e.opts.jsonPointers ? I : C) + ") ) ";\n              }\n              a += ") {  ";\n              var $;\n              b = "\' + " + (D = "missing" + s) + " + \'", e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(E, D, !0) : E + " + " + D), ($ = $ || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: \'required\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: \'" + b + "\' } ", !1 !== e.opts.messages && (a += " , message: \'", a += e.opts._errorDataPathProperty ? "is a required property" : "should have required property \\\\\'" + b + "\\\\\'", a += "\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", _ = a, a = $.pop(), a += !e.compositeRule && u ? e.async ? " throw new ValidationError([" + _ + "]); " : " validate.errors = [" + _ + "]; return false; " : " var err = " + _ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { ";\n            }\n          } else if (w) {\n            d || (a += " var " + f + " = validate.schema" + n + "; ");\n            var D;\n            b = "\' + " + (D = "schema" + s + "[" + (x = "i" + s) + "]") + " + \'", e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(E, D, e.opts.jsonPointers)), d && (a += " if (" + f + " && !Array.isArray(" + f + ")) {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: \'required\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: \'" + b + "\' } ", !1 !== e.opts.messages && (a += " , message: \'", a += e.opts._errorDataPathProperty ? "is a required property" : "should have required property \\\\\'" + b + "\\\\\'", a += "\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + f + " !== undefined) { "), a += " for (var " + x + " = 0; " + x + " < " + f + ".length; " + x + "++) { if (" + c + "[" + f + "[" + x + "]] === undefined ", S && (a += " || ! Object.prototype.hasOwnProperty.call(" + c + ", " + f + "[" + x + "]) "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: \'required\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: \'" + b + "\' } ", !1 !== e.opts.messages && (a += " , message: \'", a += e.opts._errorDataPathProperty ? "is a required property" : "should have required property \\\\\'" + b + "\\\\\'", a += "\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", d && (a += "  }  ");\n          } else {\n            var j = p;\n            if (j) for (var I, O = -1, A = j.length - 1; O < A;) {\n              I = j[O += 1];\n              var C = e.util.getProperty(I),\n                  k = (b = e.util.escapeQuotes(I), c + C);\n              e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(E, I, e.opts.jsonPointers)), a += " if ( " + k + " === undefined ", S && (a += " || ! Object.prototype.hasOwnProperty.call(" + c + ", \'" + e.util.escapeQuotes(I) + "\') "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: \'required\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: \'" + b + "\' } ", !1 !== e.opts.messages && (a += " , message: \'", a += e.opts._errorDataPathProperty ? "is a required property" : "should have required property \\\\\'" + b + "\\\\\'", a += "\' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + c + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";\n            }\n          }\n          e.errorPath = E;\n        } else u && (a += " if (true) {");\n\n        return a;\n      };\n    }, {}],\n    36: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r, t) {\n        var a,\n            s = " ",\n            o = e.level,\n            i = e.dataLevel,\n            n = e.schema[r],\n            l = e.schemaPath + e.util.getProperty(r),\n            u = e.errSchemaPath + "/" + r,\n            c = !e.opts.allErrors,\n            h = "data" + (i || ""),\n            d = "valid" + o,\n            f = e.opts.$data && n && n.$data;\n\n        if (f ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, (n || f) && !1 !== e.opts.uniqueItems) {\n          f && (s += " var " + d + "; if (" + a + " === false || " + a + " === undefined) " + d + " = true; else if (typeof " + a + " != \'boolean\') " + d + " = false; else { "), s += " var i = " + h + ".length , " + d + " = true , j; if (i > 1) { ";\n          var p = e.schema.items && e.schema.items.type,\n              m = Array.isArray(p);\n          !p || "object" == p || "array" == p || m && (0 <= p.indexOf("object") || 0 <= p.indexOf("array")) ? s += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + h + "[i], " + h + "[j])) { " + d + " = false; break outer; } } } " : (s += " var itemIndices = {}, item; for (;i--;) { var item = " + h + "[i]; ", s += " if (" + e.util["checkDataType" + (m ? "s" : "")](p, "item", !0) + ") continue; ", m && (s += " if (typeof item == \'string\') item = \'\\"\' + item; "), s += " if (typeof itemIndices[item] == \'number\') { " + d + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "), s += " } ", f && (s += "  }  ");\n          var v = v || [];\n          v.push(s += " if (!" + d + ") {   "), s = "", !1 !== e.createErrors ? (s += " { keyword: \'uniqueItems\' , dataPath: (dataPath || \'\') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { i: i, j: j } ", !1 !== e.opts.messages && (s += " , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' "), e.opts.verbose && (s += " , schema:  ", s += f ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";\n          var g = s;\n          s = v.pop(), s += !e.compositeRule && c ? e.async ? " throw new ValidationError([" + g + "]); " : " validate.errors = [" + g + "]; return false; " : " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", c && (s += " else { ");\n        } else c && (s += " if (true) { ");\n\n        return s;\n      };\n    }, {}],\n    37: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (a, e, r) {\n        function J(e) {\n          for (var r = e.rules, t = 0; t < r.length; t++) {\n            if (Z(r[t])) return !0;\n          }\n        }\n\n        function Z(e) {\n          return void 0 !== a.schema[e.keyword] || e.implements && function (e) {\n            for (var r = e.implements, t = 0; t < r.length; t++) {\n              if (void 0 !== a.schema[r[t]]) return !0;\n            }\n          }(e);\n        }\n\n        var t = "",\n            s = !0 === a.schema.$async,\n            o = a.util.schemaHasRulesExcept(a.schema, a.RULES.all, "$ref"),\n            i = a.self._getId(a.schema);\n\n        if (a.isTop && (t += " var validate = ", s && (a.async = !0, t += "async "), t += "function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ", i && (a.opts.sourceCode || a.opts.processCode) && (t += " /*# sourceURL=" + i + " */ ")), "boolean" == typeof a.schema || !o && !a.schema.$ref) {\n          var n = a.level,\n              l = a.dataLevel,\n              u = a.schema[e = "false schema"],\n              c = a.schemaPath + a.util.getProperty(e),\n              h = a.errSchemaPath + "/" + e,\n              d = !a.opts.allErrors,\n              f = "data" + (l || ""),\n              p = "valid" + n;\n\n          if (!1 === a.schema) {\n            a.isTop ? d = !0 : t += " var " + p + " = false; ", (K = K || []).push(t), t = "", !1 !== a.createErrors ? (t += " { keyword: \'false schema\' , dataPath: (dataPath || \'\') + " + a.errorPath + " , schemaPath: " + a.util.toQuotedString(h) + " , params: {} ", !1 !== a.opts.messages && (t += " , message: \'boolean schema is false\' "), a.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + a.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ";\n            var m = t;\n            t = K.pop(), t += !a.compositeRule && d ? a.async ? " throw new ValidationError([" + m + "]); " : " validate.errors = [" + m + "]; return false; " : " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";\n          } else t += a.isTop ? s ? " return data; " : " validate.errors = null; return true; " : " var " + p + " = true; ";\n\n          return a.isTop && (t += " }; return validate; "), t;\n        }\n\n        if (a.isTop) {\n          var v = a.isTop;\n          n = a.level = 0, l = a.dataLevel = 0, f = "data", a.rootId = a.resolve.fullPath(a.self._getId(a.root.schema)), a.baseId = a.baseId || a.rootId, delete a.isTop, a.dataPathArr = [void 0], t += " var vErrors = null; ", t += " var errors = 0;     ", t += " if (rootData === undefined) rootData = data; ";\n        } else {\n          if (n = a.level, f = "data" + ((l = a.dataLevel) || ""), i && (a.baseId = a.resolve.url(a.baseId, i)), s && !a.async) throw new Error("async schema in sync schema");\n          t += " var errs_" + n + " = errors;";\n        }\n\n        p = "valid" + n, d = !a.opts.allErrors;\n        var g = "",\n            y = "",\n            P = a.schema.type,\n            E = Array.isArray(P);\n\n        if (E && 1 == P.length && (P = P[0], E = !1), a.schema.$ref && o) {\n          if ("fail" == a.opts.extendRefs) throw new Error(\'$ref: validation keywords used in schema at path "\' + a.errSchemaPath + \'" (see option extendRefs)\');\n          !0 !== a.opts.extendRefs && (o = !1, a.logger.warn(\'$ref: keywords ignored in schema at path "\' + a.errSchemaPath + \'"\'));\n        }\n\n        if (a.schema.$comment && a.opts.$comment && (t += " " + a.RULES.all.$comment.code(a, "$comment")), P) {\n          if (a.opts.coerceTypes) var w = a.util.coerceToTypes(a.opts.coerceTypes, P);\n          var S = a.RULES.types[P];\n\n          if (w || E || !0 === S || S && !J(S)) {\n            if (c = a.schemaPath + ".type", h = a.errSchemaPath + "/type", c = a.schemaPath + ".type", h = a.errSchemaPath + "/type", t += " if (" + a.util[E ? "checkDataTypes" : "checkDataType"](P, f, !0) + ") { ", w) {\n              var b = "dataType" + n,\n                  _ = "coerced" + n;\n\n              t += " var " + b + " = typeof " + f + "; ", "array" == a.opts.coerceTypes && (t += " if (" + b + " == \'object\' && Array.isArray(" + f + ")) " + b + " = \'array\'; "), t += " var " + _ + " = undefined; ";\n              var F = "",\n                  x = w;\n              if (x) for (var R, $ = -1, D = x.length - 1; $ < D;) {\n                R = x[$ += 1], $ && (t += " if (" + _ + " === undefined) { ", F += "}"), "array" == a.opts.coerceTypes && "array" != R && (t += " if (" + b + " == \'array\' && " + f + ".length == 1) { " + _ + " = " + f + " = " + f + "[0]; " + b + " = typeof " + f + ";  } "), "string" == R ? t += " if (" + b + " == \'number\' || " + b + " == \'boolean\') " + _ + " = \'\' + " + f + "; else if (" + f + " === null) " + _ + " = \'\'; " : "number" == R || "integer" == R ? (t += " if (" + b + " == \'boolean\' || " + f + " === null || (" + b + " == \'string\' && " + f + " && " + f + " == +" + f + " ", "integer" == R && (t += " && !(" + f + " % 1)"), t += ")) " + _ + " = +" + f + "; ") : "boolean" == R ? t += " if (" + f + " === \'false\' || " + f + " === 0 || " + f + " === null) " + _ + " = false; else if (" + f + " === \'true\' || " + f + " === 1) " + _ + " = true; " : "null" == R ? t += " if (" + f + " === \'\' || " + f + " === 0 || " + f + " === false) " + _ + " = null; " : "array" == a.opts.coerceTypes && "array" == R && (t += " if (" + b + " == \'string\' || " + b + " == \'number\' || " + b + " == \'boolean\' || " + f + " == null) " + _ + " = [" + f + "]; ");\n              }\n              (K = K || []).push(t += " " + F + " if (" + _ + " === undefined) {   "), t = "", !1 !== a.createErrors ? (t += " { keyword: \'type\' , dataPath: (dataPath || \'\') + " + a.errorPath + " , schemaPath: " + a.util.toQuotedString(h) + " , params: { type: \'", t += E ? "" + P.join(",") : "" + P, t += "\' } ", !1 !== a.opts.messages && (t += " , message: \'should be ", t += E ? "" + P.join(",") : "" + P, t += "\' "), a.opts.verbose && (t += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + a.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", m = t, t = K.pop(), t += !a.compositeRule && d ? a.async ? " throw new ValidationError([" + m + "]); " : " validate.errors = [" + m + "]; return false; " : " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else {  ";\n              var j = l ? "data" + (l - 1 || "") : "parentData";\n              t += " " + f + " = " + _ + "; ", l || (t += "if (" + j + " !== undefined)"), t += " " + j + "[" + (l ? a.dataPathArr[l] : "parentDataProperty") + "] = " + _ + "; } ";\n            } else (K = K || []).push(t), t = "", !1 !== a.createErrors ? (t += " { keyword: \'type\' , dataPath: (dataPath || \'\') + " + a.errorPath + " , schemaPath: " + a.util.toQuotedString(h) + " , params: { type: \'", t += E ? "" + P.join(",") : "" + P, t += "\' } ", !1 !== a.opts.messages && (t += " , message: \'should be ", t += E ? "" + P.join(",") : "" + P, t += "\' "), a.opts.verbose && (t += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + a.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", m = t, t = K.pop(), t += !a.compositeRule && d ? a.async ? " throw new ValidationError([" + m + "]); " : " validate.errors = [" + m + "]; return false; " : " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";\n\n            t += " } ";\n          }\n        }\n\n        if (a.schema.$ref && !o) t += " " + a.RULES.all.$ref.code(a, "$ref") + " ", d && (t += " } if (errors === ", t += v ? "0" : "errs_" + n, t += ") { ", y += "}");else {\n          var I = a.RULES;\n          if (I) for (var O = -1, A = I.length - 1; O < A;) {\n            if (J(S = I[O += 1])) {\n              if (S.type && (t += " if (" + a.util.checkDataType(S.type, f) + ") { "), a.opts.useDefaults && !a.compositeRule) if ("object" == S.type && a.schema.properties) {\n                u = a.schema.properties;\n                var C = Object.keys(u);\n                if (C) for (var k, L = -1, z = C.length - 1; L < z;) {\n                  void 0 !== (N = u[k = C[L += 1]]).default && (t += "  if (" + (U = f + a.util.getProperty(k)) + " === undefined) " + U + " = ", t += "shared" == a.opts.useDefaults ? " " + a.useDefault(N.default) + " " : " " + JSON.stringify(N.default) + " ", t += "; ");\n                }\n              } else if ("array" == S.type && Array.isArray(a.schema.items)) {\n                var T = a.schema.items;\n\n                if (T) {\n                  $ = -1;\n\n                  for (var N, q = T.length - 1; $ < q;) {\n                    var U;\n                    void 0 !== (N = T[$ += 1]).default && (t += "  if (" + (U = f + "[" + $ + "]") + " === undefined) " + U + " = ", t += "shared" == a.opts.useDefaults ? " " + a.useDefault(N.default) + " " : " " + JSON.stringify(N.default) + " ", t += "; ");\n                  }\n                }\n              }\n              var Q = S.rules;\n              if (Q) for (var V, H = -1, M = Q.length - 1; H < M;) {\n                if (Z(V = Q[H += 1])) {\n                  var B = V.code(a, V.keyword, S.type);\n                  B && (t += " " + B + " ", d && (g += "}"));\n                }\n              }\n\n              if (d && (t += " " + g + " ", g = ""), S.type && (t += " } ", P && P === S.type && !w)) {\n                var K;\n                c = a.schemaPath + ".type", h = a.errSchemaPath + "/type", (K = K || []).push(t += " else { "), t = "", !1 !== a.createErrors ? (t += " { keyword: \'type\' , dataPath: (dataPath || \'\') + " + a.errorPath + " , schemaPath: " + a.util.toQuotedString(h) + " , params: { type: \'", t += E ? "" + P.join(",") : "" + P, t += "\' } ", !1 !== a.opts.messages && (t += " , message: \'should be ", t += E ? "" + P.join(",") : "" + P, t += "\' "), a.opts.verbose && (t += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + a.schemaPath + " , data: " + f + " "), t += " } ") : t += " {} ", m = t, t = K.pop(), t += !a.compositeRule && d ? a.async ? " throw new ValidationError([" + m + "]); " : " validate.errors = [" + m + "]; return false; " : " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ";\n              }\n\n              d && (t += " if (errors === ", t += v ? "0" : "errs_" + n, t += ") { ", y += "}");\n            }\n          }\n        }\n        return d && (t += " " + y + " "), v ? (s ? (t += " if (errors === 0) return data;           ", t += " else throw new ValidationError(vErrors); ") : (t += " validate.errors = vErrors; ", t += " return errors === 0;       "), t += " }; return validate;") : t += " var " + p + " = errors === errs_" + n + ";", t = a.util.cleanUpCode(t), v && (t = a.util.finalCleanUpCode(t, s)), t;\n      };\n    }, {}],\n    38: [function (e, r, t) {\n      "use strict";\n\n      var c = /^[a-z_$][a-z0-9_$-]*$/i,\n          h = e("./dotjs/custom");\n      r.exports = {\n        add: function add(e, r) {\n          function l(e, r, t) {\n            for (var a, s = 0; s < n.length; s++) {\n              var o = n[s];\n\n              if (o.type == r) {\n                a = o;\n                break;\n              }\n            }\n\n            a || n.push(a = {\n              type: r,\n              rules: []\n            });\n            var i = {\n              keyword: e,\n              definition: t,\n              custom: !0,\n              code: h,\n              implements: t.implements\n            };\n            a.rules.push(i), n.custom[e] = i;\n          }\n\n          function u(e) {\n            if (!n.types[e]) throw new Error("Unknown type " + e);\n          }\n\n          var n = this.RULES;\n          if (n.keywords[e]) throw new Error("Keyword " + e + " is already defined");\n          if (!c.test(e)) throw new Error("Keyword " + e + " is not a valid identifier");\n\n          if (r) {\n            if (r.macro && void 0 !== r.valid) throw new Error(\'"valid" option cannot be used with macro keywords\');\n            var t = r.type;\n\n            if (Array.isArray(t)) {\n              var a,\n                  s = t.length;\n\n              for (a = 0; a < s; a++) {\n                u(t[a]);\n              }\n\n              for (a = 0; a < s; a++) {\n                l(e, t[a], r);\n              }\n            } else t && u(t), l(e, t, r);\n\n            var o = !0 === r.$data && this._opts.$data;\n            if (o && !r.validate) throw new Error(\'$data support: "validate" function is not defined\');\n            var i = r.metaSchema;\n            i && (o && (i = {\n              anyOf: [i, {\n                $ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"\n              }]\n            }), r.validateSchema = this.compile(i, !0));\n          }\n\n          return n.keywords[e] = n.all[e] = !0, this;\n        },\n        get: function get(e) {\n          var r = this.RULES.custom[e];\n          return r ? r.definition : this.RULES.keywords[e] || !1;\n        },\n        remove: function remove(e) {\n          var r = this.RULES;\n          delete r.keywords[e], delete r.all[e], delete r.custom[e];\n\n          for (var t = 0; t < r.length; t++) {\n            for (var a = r[t].rules, s = 0; s < a.length; s++) {\n              if (a[s].keyword == e) {\n                a.splice(s, 1);\n                break;\n              }\n            }\n          }\n\n          return this;\n        }\n      };\n    }, {\n      "./dotjs/custom": 21\n    }],\n    39: [function (e, r, t) {\n      r.exports = {\n        $schema: "http://json-schema.org/draft-07/schema#",\n        $id: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",\n        description: "Meta-schema for $data reference (JSON Schema extension proposal)",\n        type: "object",\n        required: ["$data"],\n        properties: {\n          $data: {\n            type: "string",\n            anyOf: [{\n              format: "relative-json-pointer"\n            }, {\n              format: "json-pointer"\n            }]\n          }\n        },\n        additionalProperties: !1\n      };\n    }, {}],\n    40: [function (e, r, t) {\n      r.exports = {\n        $schema: "http://json-schema.org/draft-07/schema#",\n        $id: "http://json-schema.org/draft-07/schema#",\n        title: "Core schema meta-schema",\n        definitions: {\n          schemaArray: {\n            type: "array",\n            minItems: 1,\n            items: {\n              $ref: "#"\n            }\n          },\n          nonNegativeInteger: {\n            type: "integer",\n            minimum: 0\n          },\n          nonNegativeIntegerDefault0: {\n            allOf: [{\n              $ref: "#/definitions/nonNegativeInteger"\n            }, {\n              default: 0\n            }]\n          },\n          simpleTypes: {\n            enum: ["array", "boolean", "integer", "null", "number", "object", "string"]\n          },\n          stringArray: {\n            type: "array",\n            items: {\n              type: "string"\n            },\n            uniqueItems: !0,\n            default: []\n          }\n        },\n        type: ["object", "boolean"],\n        properties: {\n          $id: {\n            type: "string",\n            format: "uri-reference"\n          },\n          $schema: {\n            type: "string",\n            format: "uri"\n          },\n          $ref: {\n            type: "string",\n            format: "uri-reference"\n          },\n          $comment: {\n            type: "string"\n          },\n          title: {\n            type: "string"\n          },\n          description: {\n            type: "string"\n          },\n          default: !0,\n          readOnly: {\n            type: "boolean",\n            default: !1\n          },\n          examples: {\n            type: "array",\n            items: !0\n          },\n          multipleOf: {\n            type: "number",\n            exclusiveMinimum: 0\n          },\n          maximum: {\n            type: "number"\n          },\n          exclusiveMaximum: {\n            type: "number"\n          },\n          minimum: {\n            type: "number"\n          },\n          exclusiveMinimum: {\n            type: "number"\n          },\n          maxLength: {\n            $ref: "#/definitions/nonNegativeInteger"\n          },\n          minLength: {\n            $ref: "#/definitions/nonNegativeIntegerDefault0"\n          },\n          pattern: {\n            type: "string",\n            format: "regex"\n          },\n          additionalItems: {\n            $ref: "#"\n          },\n          items: {\n            anyOf: [{\n              $ref: "#"\n            }, {\n              $ref: "#/definitions/schemaArray"\n            }],\n            default: !0\n          },\n          maxItems: {\n            $ref: "#/definitions/nonNegativeInteger"\n          },\n          minItems: {\n            $ref: "#/definitions/nonNegativeIntegerDefault0"\n          },\n          uniqueItems: {\n            type: "boolean",\n            default: !1\n          },\n          contains: {\n            $ref: "#"\n          },\n          maxProperties: {\n            $ref: "#/definitions/nonNegativeInteger"\n          },\n          minProperties: {\n            $ref: "#/definitions/nonNegativeIntegerDefault0"\n          },\n          required: {\n            $ref: "#/definitions/stringArray"\n          },\n          additionalProperties: {\n            $ref: "#"\n          },\n          definitions: {\n            type: "object",\n            additionalProperties: {\n              $ref: "#"\n            },\n            default: {}\n          },\n          properties: {\n            type: "object",\n            additionalProperties: {\n              $ref: "#"\n            },\n            default: {}\n          },\n          patternProperties: {\n            type: "object",\n            additionalProperties: {\n              $ref: "#"\n            },\n            propertyNames: {\n              format: "regex"\n            },\n            default: {}\n          },\n          dependencies: {\n            type: "object",\n            additionalProperties: {\n              anyOf: [{\n                $ref: "#"\n              }, {\n                $ref: "#/definitions/stringArray"\n              }]\n            }\n          },\n          propertyNames: {\n            $ref: "#"\n          },\n          const: !0,\n          enum: {\n            type: "array",\n            items: !0,\n            minItems: 1,\n            uniqueItems: !0\n          },\n          type: {\n            anyOf: [{\n              $ref: "#/definitions/simpleTypes"\n            }, {\n              type: "array",\n              items: {\n                $ref: "#/definitions/simpleTypes"\n              },\n              minItems: 1,\n              uniqueItems: !0\n            }]\n          },\n          format: {\n            type: "string"\n          },\n          contentMediaType: {\n            type: "string"\n          },\n          contentEncoding: {\n            type: "string"\n          },\n          if: {\n            $ref: "#"\n          },\n          then: {\n            $ref: "#"\n          },\n          else: {\n            $ref: "#"\n          },\n          allOf: {\n            $ref: "#/definitions/schemaArray"\n          },\n          anyOf: {\n            $ref: "#/definitions/schemaArray"\n          },\n          oneOf: {\n            $ref: "#/definitions/schemaArray"\n          },\n          not: {\n            $ref: "#"\n          }\n        },\n        default: !0\n      };\n    }, {}],\n    41: [function (e, r, t) {\n      "use strict";\n\n      var f = Array.isArray,\n          p = Object.keys,\n          m = Object.prototype.hasOwnProperty;\n\n      r.exports = function e(r, t) {\n        if (r === t) return !0;\n\n        if (r && t && "object" == _typeof(r) && "object" == _typeof(t)) {\n          var a,\n              s,\n              o,\n              i = f(r),\n              n = f(t);\n\n          if (i && n) {\n            if ((s = r.length) != t.length) return !1;\n\n            for (a = s; 0 != a--;) {\n              if (!e(r[a], t[a])) return !1;\n            }\n\n            return !0;\n          }\n\n          if (i != n) return !1;\n          var l = r instanceof Date,\n              u = t instanceof Date;\n          if (l != u) return !1;\n          if (l && u) return r.getTime() == t.getTime();\n          var c = r instanceof RegExp,\n              h = t instanceof RegExp;\n          if (c != h) return !1;\n          if (c && h) return r.toString() == t.toString();\n          var d = p(r);\n          if ((s = d.length) !== p(t).length) return !1;\n\n          for (a = s; 0 != a--;) {\n            if (!m.call(t, d[a])) return !1;\n          }\n\n          for (a = s; 0 != a--;) {\n            if (!e(r[o = d[a]], t[o])) return !1;\n          }\n\n          return !0;\n        }\n\n        return r != r && t != t;\n      };\n    }, {}],\n    42: [function (e, r, t) {\n      "use strict";\n\n      r.exports = function (e, r) {\n        r || (r = {}), "function" == typeof r && (r = {\n          cmp: r\n        });\n        var a,\n            l = "boolean" == typeof r.cycles && r.cycles,\n            u = r.cmp && (a = r.cmp, function (t) {\n          return function (e, r) {\n            return a({\n              key: e,\n              value: t[e]\n            }, {\n              key: r,\n              value: t[r]\n            });\n          };\n        }),\n            c = [];\n        return function e(r) {\n          if (r && r.toJSON && "function" == typeof r.toJSON && (r = r.toJSON()), void 0 !== r) {\n            if ("number" == typeof r) return isFinite(r) ? "" + r : "null";\n            if ("object" != _typeof(r)) return JSON.stringify(r);\n            var t, a;\n\n            if (Array.isArray(r)) {\n              for (a = "[", t = 0; t < r.length; t++) {\n                t && (a += ","), a += e(r[t]) || "null";\n              }\n\n              return a + "]";\n            }\n\n            if (null === r) return "null";\n\n            if (-1 !== c.indexOf(r)) {\n              if (l) return JSON.stringify("__cycle__");\n              throw new TypeError("Converting circular structure to JSON");\n            }\n\n            var s = c.push(r) - 1,\n                o = Object.keys(r).sort(u && u(r));\n\n            for (a = "", t = 0; t < o.length; t++) {\n              var i = o[t],\n                  n = e(r[i]);\n              n && (a && (a += ","), a += JSON.stringify(i) + ":" + n);\n            }\n\n            return c.splice(s, 1), "{" + a + "}";\n          }\n        }(e);\n      };\n    }, {}],\n    43: [function (e, r, t) {\n      "use strict";\n\n      var p = r.exports = function (e, r, t) {\n        "function" == typeof r && (t = r, r = {}), function e(r, t, a, s, o, i, n, l, u) {\n          if (a && "object" == _typeof(a) && !Array.isArray(a)) for (var c in t(a, s, o, i, n, l, u), a) {\n            var h = a[c];\n\n            if (Array.isArray(h)) {\n              if (c in p.arrayKeywords) for (var d = 0; d < h.length; d++) {\n                e(r, t, h[d], s + "/" + c + "/" + d, o, s, c, a, d);\n              }\n            } else if (c in p.propsKeywords) {\n              if (h && "object" == _typeof(h)) for (var f in h) {\n                e(r, t, h[f], s + "/" + c + "/" + f.replace(/~/g, "~0").replace(/\\//g, "~1"), o, s, c, a, f);\n              }\n            } else (c in p.keywords || r.allKeys && !(c in p.skipKeywords)) && e(r, t, h, s + "/" + c, o, s, c, a);\n          }\n        }(r, t, e, "", e);\n      };\n\n      p.keywords = {\n        additionalItems: !0,\n        items: !0,\n        contains: !0,\n        additionalProperties: !0,\n        propertyNames: !0,\n        not: !0\n      }, p.arrayKeywords = {\n        items: !0,\n        allOf: !0,\n        anyOf: !0,\n        oneOf: !0\n      }, p.propsKeywords = {\n        definitions: !0,\n        properties: !0,\n        patternProperties: !0,\n        dependencies: !0\n      }, p.skipKeywords = {\n        enum: !0,\n        const: !0,\n        required: !0,\n        maximum: !0,\n        minimum: !0,\n        exclusiveMaximum: !0,\n        exclusiveMinimum: !0,\n        multipleOf: !0,\n        maxLength: !0,\n        minLength: !0,\n        pattern: !0,\n        format: !0,\n        maxItems: !0,\n        minItems: !0,\n        uniqueItems: !0,\n        maxProperties: !0,\n        minProperties: !0\n      };\n    }, {}],\n    44: [function (e, r, t) {\n      var a;\n      a = this, function (e) {\n        "use strict";\n\n        function C() {\n          for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) {\n            r[t] = arguments[t];\n          }\n\n          if (1 < r.length) {\n            r[0] = r[0].slice(0, -1);\n\n            for (var a = r.length - 1, s = 1; s < a; ++s) {\n              r[s] = r[s].slice(1, -1);\n            }\n\n            return r[a] = r[a].slice(1), r.join("");\n          }\n\n          return r[0];\n        }\n\n        function k(e) {\n          return "(?:" + e + ")";\n        }\n\n        function a(e) {\n          return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase();\n        }\n\n        function p(e) {\n          return e.toUpperCase();\n        }\n\n        function r(e) {\n          var r = "[A-Za-z]",\n              t = "[0-9]",\n              a = C(t, "[A-Fa-f]"),\n              s = k(k("%[EFef]" + a + "%" + a + a + "%" + a + a) + "|" + k("%[89A-Fa-f]" + a + "%" + a + a) + "|" + k("%" + a + a)),\n              o = "[\\\\!\\\\$\\\\&\\\\\'\\\\(\\\\)\\\\*\\\\+\\\\,\\\\;\\\\=]",\n              i = C("[\\\\:\\\\/\\\\?\\\\#\\\\[\\\\]\\\\@]", o),\n              n = e ? "[\\\\uE000-\\\\uF8FF]" : "[]",\n              l = C(r, t, "[\\\\-\\\\.\\\\_\\\\~]", e ? "[\\\\xA0-\\\\u200D\\\\u2010-\\\\u2029\\\\u202F-\\\\uD7FF\\\\uF900-\\\\uFDCF\\\\uFDF0-\\\\uFFEF]" : "[]"),\n              u = k(r + C(r, t, "[\\\\+\\\\-\\\\.]") + "*"),\n              c = k(k(s + "|" + C(l, o, "[\\\\:]")) + "*"),\n              h = (k(k("25[0-5]") + "|" + k("2[0-4]" + t) + "|" + k("1" + t + t) + "|" + k("[1-9]" + t) + "|" + t), k(k("25[0-5]") + "|" + k("2[0-4]" + t) + "|" + k("1" + t + t) + "|" + k("0?[1-9]" + t) + "|0?0?" + t)),\n              d = k(h + "\\\\." + h + "\\\\." + h + "\\\\." + h),\n              f = k(a + "{1,4}"),\n              p = k(k(f + "\\\\:" + f) + "|" + d),\n              m = k([k(k(f + "\\\\:") + "{6}" + p), k("\\\\:\\\\:" + k(f + "\\\\:") + "{5}" + p), k(k(f) + "?\\\\:\\\\:" + k(f + "\\\\:") + "{4}" + p), k(k(k(f + "\\\\:") + "{0,1}" + f) + "?\\\\:\\\\:" + k(f + "\\\\:") + "{3}" + p), k(k(k(f + "\\\\:") + "{0,2}" + f) + "?\\\\:\\\\:" + k(f + "\\\\:") + "{2}" + p), k(k(k(f + "\\\\:") + "{0,3}" + f) + "?\\\\:\\\\:" + f + "\\\\:" + p), k(k(k(f + "\\\\:") + "{0,4}" + f) + "?\\\\:\\\\:" + p), k(k(k(f + "\\\\:") + "{0,5}" + f) + "?\\\\:\\\\:" + f), k(k(k(f + "\\\\:") + "{0,6}" + f) + "?\\\\:\\\\:")].join("|")),\n              v = k(k(l + "|" + s) + "+"),\n              g = (k(m + "\\\\%25" + v), k("\\\\[" + k(k(m + k("\\\\%25|\\\\%(?!" + a + "{2})") + v) + "|" + m + "|" + k("[vV]" + a + "+\\\\." + C(l, o, "[\\\\:]") + "+")) + "\\\\]")),\n              y = k(k(s + "|" + C(l, o)) + "*"),\n              P = k(g + "|" + d + "(?!" + y + ")|" + y),\n              E = k(t + "*"),\n              w = k(k(c + "@") + "?" + P + k("\\\\:" + E) + "?"),\n              S = k(s + "|" + C(l, o, "[\\\\:\\\\@]")),\n              b = k(S + "*"),\n              _ = k(S + "+"),\n              F = k(k(s + "|" + C(l, o, "[\\\\@]")) + "+"),\n              x = k(k("\\\\/" + b) + "*"),\n              R = k("\\\\/" + k(_ + x) + "?"),\n              $ = k(F + x),\n              D = k(_ + x),\n              j = "(?!" + S + ")",\n              I = (k(x + "|" + R + "|" + $ + "|" + D + "|" + j), k(k(S + "|" + C("[\\\\/\\\\?]", n)) + "*")),\n              O = k(k(S + "|[\\\\/\\\\?]") + "*"),\n              A = k(k("\\\\/\\\\/" + w + x) + "|" + R + "|" + D + "|" + j);\n\n          return k(k(u + "\\\\:" + A + k("\\\\?" + I) + "?" + k("\\\\#" + O) + "?") + "|" + k(k(k("\\\\/\\\\/" + w + x) + "|" + R + "|" + $ + "|" + j) + k("\\\\?" + I) + "?" + k("\\\\#" + O) + "?")), k(u + "\\\\:" + A + k("\\\\?" + I) + "?"), k(k("\\\\/\\\\/(" + k("(" + c + ")@") + "?(" + P + ")" + k("\\\\:(" + E + ")") + "?)") + "?(" + x + "|" + R + "|" + D + "|" + j + ")"), k("\\\\?(" + I + ")"), k("\\\\#(" + O + ")"), k(k("\\\\/\\\\/(" + k("(" + c + ")@") + "?(" + P + ")" + k("\\\\:(" + E + ")") + "?)") + "?(" + x + "|" + R + "|" + $ + "|" + j + ")"), k("\\\\?(" + I + ")"), k("\\\\#(" + O + ")"), k(k("\\\\/\\\\/(" + k("(" + c + ")@") + "?(" + P + ")" + k("\\\\:(" + E + ")") + "?)") + "?(" + x + "|" + R + "|" + D + "|" + j + ")"), k("\\\\?(" + I + ")"), k("\\\\#(" + O + ")"), k("(" + c + ")@"), k("\\\\:(" + E + ")"), {\n            NOT_SCHEME: new RegExp(C("[^]", r, t, "[\\\\+\\\\-\\\\.]"), "g"),\n            NOT_USERINFO: new RegExp(C("[^\\\\%\\\\:]", l, o), "g"),\n            NOT_HOST: new RegExp(C("[^\\\\%\\\\[\\\\]\\\\:]", l, o), "g"),\n            NOT_PATH: new RegExp(C("[^\\\\%\\\\/\\\\:\\\\@]", l, o), "g"),\n            NOT_PATH_NOSCHEME: new RegExp(C("[^\\\\%\\\\/\\\\@]", l, o), "g"),\n            NOT_QUERY: new RegExp(C("[^\\\\%]", l, o, "[\\\\:\\\\@\\\\/\\\\?]", n), "g"),\n            NOT_FRAGMENT: new RegExp(C("[^\\\\%]", l, o, "[\\\\:\\\\@\\\\/\\\\?]"), "g"),\n            ESCAPE: new RegExp(C("[^]", l, o), "g"),\n            UNRESERVED: new RegExp(l, "g"),\n            OTHER_CHARS: new RegExp(C("[^\\\\%]", l, i), "g"),\n            PCT_ENCODED: new RegExp(s, "g"),\n            IPV4ADDRESS: new RegExp("^(" + d + ")$"),\n            IPV6ADDRESS: new RegExp("^\\\\[?(" + m + ")" + k(k("\\\\%25|\\\\%(?!" + a + "{2})") + "(" + v + ")") + "?\\\\]?$")\n          };\n        }\n\n        function T(e) {\n          throw new RangeError(i[e]);\n        }\n\n        function n(e, r) {\n          var t = e.split("@"),\n              a = "";\n          return 1 < t.length && (a = t[0] + "@", e = t[1]), a + function (e, r) {\n            for (var t = [], a = e.length; a--;) {\n              t[a] = r(e[a]);\n            }\n\n            return t;\n          }((e = e.replace(o, ".")).split("."), r).join(".");\n        }\n\n        function N(e) {\n          for (var r = [], t = 0, a = e.length; t < a;) {\n            var s = e.charCodeAt(t++);\n\n            if (55296 <= s && s <= 56319 && t < a) {\n              var o = e.charCodeAt(t++);\n              56320 == (64512 & o) ? r.push(((1023 & s) << 10) + (1023 & o) + 65536) : (r.push(s), t--);\n            } else r.push(s);\n          }\n\n          return r;\n        }\n\n        function m(e) {\n          var r = e.charCodeAt(0);\n          return r < 16 ? "%0" + r.toString(16).toUpperCase() : r < 128 ? "%" + r.toString(16).toUpperCase() : r < 2048 ? "%" + (r >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase() : "%" + (r >> 12 | 224).toString(16).toUpperCase() + "%" + (r >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase();\n        }\n\n        function f(e) {\n          for (var r = "", t = 0, a = e.length; t < a;) {\n            var s = parseInt(e.substr(t + 1, 2), 16);\n            if (s < 128) r += String.fromCharCode(s), t += 3;else if (194 <= s && s < 224) {\n              if (6 <= a - t) {\n                var o = parseInt(e.substr(t + 4, 2), 16);\n                r += String.fromCharCode((31 & s) << 6 | 63 & o);\n              } else r += e.substr(t, 6);\n\n              t += 6;\n            } else if (224 <= s) {\n              if (9 <= a - t) {\n                var i = parseInt(e.substr(t + 4, 2), 16),\n                    n = parseInt(e.substr(t + 7, 2), 16);\n                r += String.fromCharCode((15 & s) << 12 | (63 & i) << 6 | 63 & n);\n              } else r += e.substr(t, 9);\n\n              t += 9;\n            } else r += e.substr(t, 3), t += 3;\n          }\n\n          return r;\n        }\n\n        function g(e, t) {\n          function r(e) {\n            var r = f(e);\n            return r.match(t.UNRESERVED) ? r : e;\n          }\n\n          return e.scheme && (e.scheme = String(e.scheme).replace(t.PCT_ENCODED, r).toLowerCase().replace(t.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, r).replace(t.NOT_USERINFO, m).replace(t.PCT_ENCODED, p)), void 0 !== e.host && (e.host = String(e.host).replace(t.PCT_ENCODED, r).toLowerCase().replace(t.NOT_HOST, m).replace(t.PCT_ENCODED, p)), void 0 !== e.path && (e.path = String(e.path).replace(t.PCT_ENCODED, r).replace(e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME, m).replace(t.PCT_ENCODED, p)), void 0 !== e.query && (e.query = String(e.query).replace(t.PCT_ENCODED, r).replace(t.NOT_QUERY, m).replace(t.PCT_ENCODED, p)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(t.PCT_ENCODED, r).replace(t.NOT_FRAGMENT, m).replace(t.PCT_ENCODED, p)), e;\n        }\n\n        function S(e) {\n          return e.replace(/^0*(.*)/, "$1") || "0";\n        }\n\n        function b(e, r) {\n          var t = e.match(r.IPV4ADDRESS) || [],\n              a = w(t, 2)[1];\n          return a ? a.split(".").map(S).join(".") : e;\n        }\n\n        function y(e, r) {\n          var t = e.match(r.IPV6ADDRESS) || [],\n              a = w(t, 3),\n              s = a[1],\n              o = a[2];\n\n          if (s) {\n            for (var i = s.toLowerCase().split("::").reverse(), n = w(i, 2), l = n[0], u = n[1], c = u ? u.split(":").map(S) : [], h = l.split(":").map(S), d = r.IPV4ADDRESS.test(h[h.length - 1]), f = d ? 7 : 8, p = h.length - f, m = Array(f), v = 0; v < f; ++v) {\n              m[v] = c[v] || h[p + v] || "";\n            }\n\n            d && (m[f - 1] = b(m[f - 1], r));\n            var g = m.reduce(function (e, r, t) {\n              if (!r || "0" === r) {\n                var a = e[e.length - 1];\n                a && a.index + a.length === t ? a.length++ : e.push({\n                  index: t,\n                  length: 1\n                });\n              }\n\n              return e;\n            }, []).sort(function (e, r) {\n              return r.length - e.length;\n            })[0],\n                y = void 0;\n\n            if (g && 1 < g.length) {\n              var P = m.slice(0, g.index),\n                  E = m.slice(g.index + g.length);\n              y = P.join(":") + "::" + E.join(":");\n            } else y = m.join(":");\n\n            return o && (y += "%" + o), y;\n          }\n\n          return e;\n        }\n\n        function _(e) {\n          var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},\n              t = {},\n              a = !1 !== r.iri ? h : c;\n          "suffix" === r.reference && (e = (r.scheme ? r.scheme + ":" : "") + "//" + e);\n          var s = e.match(P);\n\n          if (s) {\n            E ? (t.scheme = s[1], t.userinfo = s[3], t.host = s[4], t.port = parseInt(s[5], 10), t.path = s[6] || "", t.query = s[7], t.fragment = s[8], isNaN(t.port) && (t.port = s[5])) : (t.scheme = s[1] || void 0, t.userinfo = -1 !== e.indexOf("@") ? s[3] : void 0, t.host = -1 !== e.indexOf("//") ? s[4] : void 0, t.port = parseInt(s[5], 10), t.path = s[6] || "", t.query = -1 !== e.indexOf("?") ? s[7] : void 0, t.fragment = -1 !== e.indexOf("#") ? s[8] : void 0, isNaN(t.port) && (t.port = e.match(/\\/\\/(?:.|\\n)*\\:(?:\\/|\\?|\\#|$)/) ? s[4] : void 0)), t.host && (t.host = y(b(t.host, a), a)), t.reference = void 0 !== t.scheme || void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port || t.path || void 0 !== t.query ? void 0 === t.scheme ? "relative" : void 0 === t.fragment ? "absolute" : "uri" : "same-document", r.reference && "suffix" !== r.reference && r.reference !== t.reference && (t.error = t.error || "URI is not a " + r.reference + " reference.");\n            var o = d[(r.scheme || t.scheme || "").toLowerCase()];\n            if (r.unicodeSupport || o && o.unicodeSupport) g(t, a);else {\n              if (t.host && (r.domainHost || o && o.domainHost)) try {\n                t.host = v.toASCII(t.host.replace(a.PCT_ENCODED, f).toLowerCase());\n              } catch (e) {\n                t.error = t.error || "Host\'s domain name can not be converted to ASCII via punycode: " + e;\n              }\n              g(t, c);\n            }\n            o && o.parse && o.parse(t, r);\n          } else t.error = t.error || "URI can not be parsed.";\n\n          return t;\n        }\n\n        function D(e) {\n          for (var r = []; e.length;) {\n            if (e.match(F)) e = e.replace(F, "");else if (e.match(x)) e = e.replace(x, "/");else if (e.match(R)) e = e.replace(R, "/"), r.pop();else if ("." === e || ".." === e) e = "";else {\n              var t = e.match($);\n              if (!t) throw new Error("Unexpected dot segment condition");\n              var a = t[0];\n              e = e.slice(a.length), r.push(a);\n            }\n          }\n\n          return r.join("");\n        }\n\n        function j(r) {\n          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},\n              e = t.iri ? h : c,\n              a = [],\n              s = d[(t.scheme || r.scheme || "").toLowerCase()];\n          if (s && s.serialize && s.serialize(r, t), r.host) if (e.IPV6ADDRESS.test(r.host)) ;else if (t.domainHost || s && s.domainHost) try {\n            r.host = t.iri ? v.toUnicode(r.host) : v.toASCII(r.host.replace(e.PCT_ENCODED, f).toLowerCase());\n          } catch (e) {\n            r.error = r.error || "Host\'s domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + e;\n          }\n          g(r, e), "suffix" !== t.reference && r.scheme && (a.push(r.scheme), a.push(":"));\n          var o,\n              i,\n              n,\n              l = (i = !1 !== t.iri ? h : c, n = [], void 0 !== (o = r).userinfo && (n.push(o.userinfo), n.push("@")), void 0 !== o.host && n.push(y(b(String(o.host), i), i).replace(i.IPV6ADDRESS, function (e, r, t) {\n            return "[" + r + (t ? "%25" + t : "") + "]";\n          })), "number" == typeof o.port && (n.push(":"), n.push(o.port.toString(10))), n.length ? n.join("") : void 0);\n\n          if (void 0 !== l && ("suffix" !== t.reference && a.push("//"), a.push(l), r.path && "/" !== r.path.charAt(0) && a.push("/")), void 0 !== r.path) {\n            var u = r.path;\n            t.absolutePath || s && s.absolutePath || (u = D(u)), void 0 === l && (u = u.replace(/^\\/\\//, "/%2F")), a.push(u);\n          }\n\n          return void 0 !== r.query && (a.push("?"), a.push(r.query)), void 0 !== r.fragment && (a.push("#"), a.push(r.fragment)), a.join("");\n        }\n\n        function I(e, r) {\n          var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},\n              a = {};\n          return arguments[3] || (e = _(j(e, t), t), r = _(j(r, t), t)), !(t = t || {}).tolerant && r.scheme ? (a.scheme = r.scheme, a.userinfo = r.userinfo, a.host = r.host, a.port = r.port, a.path = D(r.path || ""), a.query = r.query) : (void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port ? (a.userinfo = r.userinfo, a.host = r.host, a.port = r.port, a.path = D(r.path || ""), a.query = r.query) : (r.path ? ("/" === r.path.charAt(0) ? a.path = D(r.path) : (a.path = void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? e.path.slice(0, e.path.lastIndexOf("/") + 1) + r.path : r.path : "/" + r.path, a.path = D(a.path)), a.query = r.query) : (a.path = e.path, a.query = void 0 !== r.query ? r.query : e.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = r.fragment, a;\n        }\n\n        function O(e, r) {\n          return e && e.toString().replace(r && r.iri ? h.PCT_ENCODED : c.PCT_ENCODED, f);\n        }\n\n        function ee(e) {\n          var r = f(e);\n          return r.match(Z) ? r : e;\n        }\n\n        var c = r(!1),\n            h = r(!0),\n            w = function w(e, r) {\n          if (Array.isArray(e)) return e;\n          if (Symbol.iterator in Object(e)) return function (e, r) {\n            var t = [],\n                a = !0,\n                s = !1,\n                o = void 0;\n\n            try {\n              for (var i, n = e[Symbol.iterator](); !(a = (i = n.next()).done) && (t.push(i.value), !r || t.length !== r); a = !0) {\n                ;\n              }\n            } catch (e) {\n              s = !0, o = e;\n            } finally {\n              try {\n                !a && n.return && n.return();\n              } finally {\n                if (s) throw o;\n              }\n            }\n\n            return t;\n          }(e, r);\n          throw new TypeError("Invalid attempt to destructure non-iterable instance");\n        },\n            A = 2147483647,\n            t = /^xn--/,\n            s = /[^\\0-\\x7E]/,\n            o = /[\\x2E\\u3002\\uFF0E\\uFF61]/g,\n            i = {\n          overflow: "Overflow: input needs wider integers to process",\n          "not-basic": "Illegal input >= 0x80 (not a basic code point)",\n          "invalid-input": "Invalid input"\n        },\n            L = Math.floor,\n            z = String.fromCharCode,\n            q = function q(e, r) {\n          return e + 22 + 75 * (e < 26) - ((0 != r) << 5);\n        },\n            U = function U(e, r, t) {\n          var a = 0;\n\n          for (e = t ? L(e / 700) : e >> 1, e += L(e / r); 455 < e; a += 36) {\n            e = L(e / 35);\n          }\n\n          return L(a + 36 * e / (e + 38));\n        },\n            l = function l(e) {\n          var r,\n              t = [],\n              a = e.length,\n              s = 0,\n              o = 128,\n              i = 72,\n              n = e.lastIndexOf("-");\n          n < 0 && (n = 0);\n\n          for (var l = 0; l < n; ++l) {\n            128 <= e.charCodeAt(l) && T("not-basic"), t.push(e.charCodeAt(l));\n          }\n\n          for (var u = 0 < n ? n + 1 : 0; u < a;) {\n            for (var c = s, h = 1, d = 36;; d += 36) {\n              a <= u && T("invalid-input");\n              var f = (r = e.charCodeAt(u++)) - 48 < 10 ? r - 22 : r - 65 < 26 ? r - 65 : r - 97 < 26 ? r - 97 : 36;\n              (36 <= f || f > L((A - s) / h)) && T("overflow"), s += f * h;\n              var p = d <= i ? 1 : i + 26 <= d ? 26 : d - i;\n              if (f < p) break;\n              var m = 36 - p;\n              h > L(A / m) && T("overflow"), h *= m;\n            }\n\n            var v = t.length + 1;\n            i = U(s - c, v, 0 == c), L(s / v) > A - o && T("overflow"), o += L(s / v), s %= v, t.splice(s++, 0, o);\n          }\n\n          return String.fromCodePoint.apply(String, t);\n        },\n            u = function u(e) {\n          var r = [],\n              t = (e = N(e)).length,\n              a = 128,\n              s = 0,\n              o = 72,\n              i = !0,\n              n = !1,\n              l = void 0;\n\n          try {\n            for (var u, c = e[Symbol.iterator](); !(i = (u = c.next()).done); i = !0) {\n              var h = u.value;\n              h < 128 && r.push(z(h));\n            }\n          } catch (e) {\n            n = !0, l = e;\n          } finally {\n            try {\n              !i && c.return && c.return();\n            } finally {\n              if (n) throw l;\n            }\n          }\n\n          var d = r.length,\n              f = d;\n\n          for (d && r.push("-"); f < t;) {\n            var p = A,\n                m = !0,\n                v = !1,\n                g = void 0;\n\n            try {\n              for (var y, P = e[Symbol.iterator](); !(m = (y = P.next()).done); m = !0) {\n                var E = y.value;\n                a <= E && E < p && (p = E);\n              }\n            } catch (e) {\n              v = !0, g = e;\n            } finally {\n              try {\n                !m && P.return && P.return();\n              } finally {\n                if (v) throw g;\n              }\n            }\n\n            var w = f + 1;\n            p - a > L((A - s) / w) && T("overflow"), s += (p - a) * w, a = p;\n\n            var S = !0,\n                b = !1,\n                _ = void 0;\n\n            try {\n              for (var F, x = e[Symbol.iterator](); !(S = (F = x.next()).done); S = !0) {\n                var R = F.value;\n\n                if (R < a && ++s > A && T("overflow"), R == a) {\n                  for (var $ = s, D = 36;; D += 36) {\n                    var j = D <= o ? 1 : o + 26 <= D ? 26 : D - o;\n                    if ($ < j) break;\n                    var I = $ - j,\n                        O = 36 - j;\n                    r.push(z(q(j + I % O, 0))), $ = L(I / O);\n                  }\n\n                  r.push(z(q($, 0))), o = U(s, w, f == d), s = 0, ++f;\n                }\n              }\n            } catch (e) {\n              b = !0, _ = e;\n            } finally {\n              try {\n                !S && x.return && x.return();\n              } finally {\n                if (b) throw _;\n              }\n            }\n\n            ++s, ++a;\n          }\n\n          return r.join("");\n        },\n            v = {\n          version: "2.1.0",\n          ucs2: {\n            decode: N,\n            encode: function encode(e) {\n              return String.fromCodePoint.apply(String, function (e) {\n                if (Array.isArray(e)) {\n                  for (var r = 0, t = Array(e.length); r < e.length; r++) {\n                    t[r] = e[r];\n                  }\n\n                  return t;\n                }\n\n                return Array.from(e);\n              }(e));\n            }\n          },\n          decode: l,\n          encode: u,\n          toASCII: function toASCII(e) {\n            return n(e, function (e) {\n              return s.test(e) ? "xn--" + u(e) : e;\n            });\n          },\n          toUnicode: function toUnicode(e) {\n            return n(e, function (e) {\n              return t.test(e) ? l(e.slice(4).toLowerCase()) : e;\n            });\n          }\n        },\n            d = {},\n            P = /^(?:([^:\\/?#]+):)?(?:\\/\\/((?:([^\\/?#@]*)@)?(\\[[^\\/?#\\]]+\\]|[^\\/?#:]*)(?:\\:(\\d*))?))?([^?#]*)(?:\\?([^#]*))?(?:#((?:.|\\n|\\r)*))?/i,\n            E = void 0 === "".match(/(){0}/)[1],\n            F = /^\\.\\.?\\//,\n            x = /^\\/\\.(\\/|$)/,\n            R = /^\\/\\.\\.(\\/|$)/,\n            $ = /^\\/?(?:.|\\n)*?(?=\\/|$)/,\n            Q = {\n          scheme: "http",\n          domainHost: !0,\n          parse: function parse(e, r) {\n            return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;\n          },\n          serialize: function serialize(e, r) {\n            return e.port !== ("https" !== String(e.scheme).toLowerCase() ? 80 : 443) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e;\n          }\n        },\n            V = {\n          scheme: "https",\n          domainHost: Q.domainHost,\n          parse: Q.parse,\n          serialize: Q.serialize\n        },\n            H = {},\n            M = "[A-Za-z0-9\\\\-\\\\.\\\\_\\\\~\\\\xA0-\\\\u200D\\\\u2010-\\\\u2029\\\\u202F-\\\\uD7FF\\\\uF900-\\\\uFDCF\\\\uFDF0-\\\\uFFEF]",\n            B = "[0-9A-Fa-f]",\n            K = k(k("%[EFef]" + B + "%" + B + B + "%" + B + B) + "|" + k("%[89A-Fa-f]" + B + "%" + B + B) + "|" + k("%" + B + B)),\n            J = C("[\\\\!\\\\$\\\\%\\\\\'\\\\(\\\\)\\\\*\\\\+\\\\,\\\\-\\\\.0-9\\\\<\\\\>A-Z\\\\x5E-\\\\x7E]", \'[\\\\"\\\\\\\\]\'),\n            Z = new RegExp(M, "g"),\n            G = new RegExp(K, "g"),\n            Y = new RegExp(C("[^]", "[A-Za-z0-9\\\\!\\\\$\\\\%\\\\\'\\\\*\\\\+\\\\-\\\\^\\\\_\\\\`\\\\{\\\\|\\\\}\\\\~]", "[\\\\.]", \'[\\\\"]\', J), "g"),\n            W = new RegExp(C("[^]", M, "[\\\\!\\\\$\\\\\'\\\\(\\\\)\\\\*\\\\+\\\\,\\\\;\\\\:\\\\@]"), "g"),\n            X = W,\n            re = {\n          scheme: "mailto",\n          parse: function parse(e, r) {\n            var t = e,\n                a = t.to = t.path ? t.path.split(",") : [];\n\n            if (t.path = void 0, t.query) {\n              for (var s = !1, o = {}, i = t.query.split("&"), n = 0, l = i.length; n < l; ++n) {\n                var u = i[n].split("=");\n\n                switch (u[0]) {\n                  case "to":\n                    for (var c = u[1].split(","), h = 0, d = c.length; h < d; ++h) {\n                      a.push(c[h]);\n                    }\n\n                    break;\n\n                  case "subject":\n                    t.subject = O(u[1], r);\n                    break;\n\n                  case "body":\n                    t.body = O(u[1], r);\n                    break;\n\n                  default:\n                    s = !0, o[O(u[0], r)] = O(u[1], r);\n                }\n              }\n\n              s && (t.headers = o);\n            }\n\n            t.query = void 0;\n\n            for (var f = 0, p = a.length; f < p; ++f) {\n              var m = a[f].split("@");\n              if (m[0] = O(m[0]), r.unicodeSupport) m[1] = O(m[1], r).toLowerCase();else try {\n                m[1] = v.toASCII(O(m[1], r).toLowerCase());\n              } catch (e) {\n                t.error = t.error || "Email address\'s domain name can not be converted to ASCII via punycode: " + e;\n              }\n              a[f] = m.join("@");\n            }\n\n            return t;\n          },\n          serialize: function serialize(e, r) {\n            var t,\n                a = e,\n                s = null != (t = e.to) ? t instanceof Array ? t : "number" != typeof t.length || t.split || t.setInterval || t.call ? [t] : Array.prototype.slice.call(t) : [];\n\n            if (s) {\n              for (var o = 0, i = s.length; o < i; ++o) {\n                var n = String(s[o]),\n                    l = n.lastIndexOf("@"),\n                    u = n.slice(0, l).replace(G, ee).replace(G, p).replace(Y, m),\n                    c = n.slice(l + 1);\n\n                try {\n                  c = r.iri ? v.toUnicode(c) : v.toASCII(O(c, r).toLowerCase());\n                } catch (e) {\n                  a.error = a.error || "Email address\'s domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + e;\n                }\n\n                s[o] = u + "@" + c;\n              }\n\n              a.path = s.join(",");\n            }\n\n            var h = e.headers = e.headers || {};\n            e.subject && (h.subject = e.subject), e.body && (h.body = e.body);\n            var d = [];\n\n            for (var f in h) {\n              h[f] !== H[f] && d.push(f.replace(G, ee).replace(G, p).replace(W, m) + "=" + h[f].replace(G, ee).replace(G, p).replace(X, m));\n            }\n\n            return d.length && (a.query = d.join("&")), a;\n          }\n        },\n            te = /^([^\\:]+)\\:(.*)/,\n            ae = {\n          scheme: "urn",\n          parse: function parse(e, r) {\n            var t = e.path && e.path.match(te),\n                a = e;\n\n            if (t) {\n              var s = r.scheme || a.scheme || "urn",\n                  o = t[1].toLowerCase(),\n                  i = t[2],\n                  n = d[s + ":" + (r.nid || o)];\n              a.nid = o, a.nss = i, a.path = void 0, n && (a = n.parse(a, r));\n            } else a.error = a.error || "URN can not be parsed.";\n\n            return a;\n          },\n          serialize: function serialize(e, r) {\n            var t = e.nid,\n                a = d[(r.scheme || e.scheme || "urn") + ":" + (r.nid || t)];\n            a && (e = a.serialize(e, r));\n            var s = e;\n            return s.path = (t || r.nid) + ":" + e.nss, s;\n          }\n        },\n            se = /^[0-9A-Fa-f]{8}(?:\\-[0-9A-Fa-f]{4}){3}\\-[0-9A-Fa-f]{12}$/,\n            oe = {\n          scheme: "urn:uuid",\n          parse: function parse(e, r) {\n            var t = e;\n            return t.uuid = t.nss, t.nss = void 0, r.tolerant || t.uuid && t.uuid.match(se) || (t.error = t.error || "UUID is not valid."), t;\n          },\n          serialize: function serialize(e, r) {\n            var t = e;\n            return t.nss = (e.uuid || "").toLowerCase(), t;\n          }\n        };\n\n        d[Q.scheme] = Q, d[V.scheme] = V, d[re.scheme] = re, d[ae.scheme] = ae, d[oe.scheme] = oe, e.SCHEMES = d, e.pctEncChar = m, e.pctDecChars = f, e.parse = _, e.removeDotSegments = D, e.serialize = j, e.resolveComponents = I, e.resolve = function (e, r, t) {\n          var a = function (e, r) {\n            var t = e;\n            if (r) for (var a in r) {\n              t[a] = r[a];\n            }\n            return t;\n          }({\n            scheme: "null"\n          }, t);\n\n          return j(I(_(e, a), _(r, a), a, !0), a);\n        }, e.normalize = function (e, r) {\n          return "string" == typeof e ? e = j(_(e, r), r) : "object" === a(e) && (e = _(j(e, r), r)), e;\n        }, e.equal = function (e, r, t) {\n          return "string" == typeof e ? e = j(_(e, t), t) : "object" === a(e) && (e = j(e, t)), "string" == typeof r ? r = j(_(r, t), t) : "object" === a(r) && (r = j(r, t)), e === r;\n        }, e.escapeComponent = function (e, r) {\n          return e && e.toString().replace(r && r.iri ? h.ESCAPE : c.ESCAPE, m);\n        }, e.unescapeComponent = O, Object.defineProperty(e, "__esModule", {\n          value: !0\n        });\n      }("object" == _typeof(t) && void 0 !== r ? t : a.URI = a.URI || {});\n    }, {}],\n    ajv: [function (a, e, r) {\n      "use strict";\n\n      function g(e) {\n        if (!(this instanceof g)) return new g(e);\n        e = this._opts = u.copy(e) || {}, function (e) {\n          var r = e._opts.logger;\n          if (!1 === r) e.logger = {\n            log: _,\n            warn: _,\n            error: _\n          };else {\n            if (void 0 === r && (r = console), !("object" == _typeof(r) && r.log && r.warn && r.error)) throw new Error("logger must implement log, warn and error methods");\n            e.logger = r;\n          }\n        }(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = o(e.format);\n        var r = this._schemaUriFormat = this._formats["uri-reference"];\n        this._schemaUriFormatFunc = function (e) {\n          return r.test(e);\n        }, this._cache = e.cache || new t(), this._loadingSchemas = {}, this._compilations = [], this.RULES = i(), this._getId = function (e) {\n          switch (e.schemaId) {\n            case "auto":\n              return S;\n\n            case "id":\n              return E;\n\n            default:\n              return w;\n          }\n        }(e), e.loopRequired = e.loopRequired || 1 / 0, "property" == e.errorDataPath && (e._errorDataPathProperty = !0), void 0 === e.serialize && (e.serialize = s), this._metaOpts = function (e) {\n          for (var r = u.copy(e._opts), t = 0; t < m.length; t++) {\n            delete r[m[t]];\n          }\n\n          return r;\n        }(this), e.formats && function (e) {\n          for (var r in e._opts.formats) {\n            var t = e._opts.formats[r];\n            e.addFormat(r, t);\n          }\n        }(this), function (e) {\n          var r;\n\n          if (e._opts.$data && (r = a("./refs/data.json"), e.addMetaSchema(r, r.$id, !0)), !1 !== e._opts.meta) {\n            var t = a("./refs/json-schema-draft-07.json");\n            e._opts.$data && (t = l(t, v)), e.addMetaSchema(t, p, !0), e._refs["http://json-schema.org/schema"] = p;\n          }\n        }(this), "object" == _typeof(e.meta) && this.addMetaSchema(e.meta), function (e) {\n          var r = e._opts.schemas;\n          if (r) if (Array.isArray(r)) e.addSchema(r);else for (var t in r) {\n            e.addSchema(r[t], t);\n          }\n        }(this);\n      }\n\n      function y(e, r) {\n        return r = d.normalizeId(r), e._schemas[r] || e._refs[r] || e._fragments[r];\n      }\n\n      function P(e, r, t) {\n        for (var a in r) {\n          var s = r[a];\n          s.meta || t && !t.test(a) || (e._cache.del(s.cacheKey), delete r[a]);\n        }\n      }\n\n      function E(e) {\n        return e.$id && this.logger.warn("schema $id ignored", e.$id), e.id;\n      }\n\n      function w(e) {\n        return e.id && this.logger.warn("schema id ignored", e.id), e.$id;\n      }\n\n      function S(e) {\n        if (e.$id && e.id && e.$id != e.id) throw new Error("schema $id is different from id");\n        return e.$id || e.id;\n      }\n\n      function b(e, r) {\n        if (e._schemas[r] || e._refs[r]) throw new Error(\'schema with key or id "\' + r + \'" already exists\');\n      }\n\n      function _() {}\n\n      var n = a("./compile"),\n          d = a("./compile/resolve"),\n          t = a("./cache"),\n          f = a("./compile/schema_obj"),\n          s = a("fast-json-stable-stringify"),\n          o = a("./compile/formats"),\n          i = a("./compile/rules"),\n          l = a("./data"),\n          u = a("./compile/util");\n      (e.exports = g).prototype.validate = function (e, r) {\n        var t;\n\n        if ("string" == typeof e) {\n          if (!(t = this.getSchema(e))) throw new Error(\'no schema with key or ref "\' + e + \'"\');\n        } else {\n          var a = this._addSchema(e);\n\n          t = a.validate || this._compile(a);\n        }\n\n        var s = t(r);\n        return !0 !== t.$async && (this.errors = t.errors), s;\n      }, g.prototype.compile = function (e, r) {\n        var t = this._addSchema(e, void 0, r);\n\n        return t.validate || this._compile(t);\n      }, g.prototype.addSchema = function (e, r, t, a) {\n        if (Array.isArray(e)) {\n          for (var s = 0; s < e.length; s++) {\n            this.addSchema(e[s], void 0, t, a);\n          }\n\n          return this;\n        }\n\n        var o = this._getId(e);\n\n        if (void 0 !== o && "string" != typeof o) throw new Error("schema id must be string");\n        return b(this, r = d.normalizeId(r || o)), this._schemas[r] = this._addSchema(e, t, a, !0), this;\n      }, g.prototype.addMetaSchema = function (e, r, t) {\n        return this.addSchema(e, r, t, !0), this;\n      }, g.prototype.validateSchema = function (e, r) {\n        var t = e.$schema;\n        if (void 0 !== t && "string" != typeof t) throw new Error("$schema must be a string");\n        if (!(t = t || this._opts.defaultMeta || (a = this, s = a._opts.meta, a._opts.defaultMeta = "object" == _typeof(s) ? a._getId(s) || s : a.getSchema(p) ? p : void 0, a._opts.defaultMeta))) return this.logger.warn("meta-schema not available"), !(this.errors = null);\n        var a,\n            s,\n            o,\n            i = this._formats.uri;\n        this._formats.uri = "function" == typeof i ? this._schemaUriFormatFunc : this._schemaUriFormat;\n\n        try {\n          o = this.validate(t, e);\n        } finally {\n          this._formats.uri = i;\n        }\n\n        if (!o && r) {\n          var n = "schema is invalid: " + this.errorsText();\n          if ("log" != this._opts.validateSchema) throw new Error(n);\n          this.logger.error(n);\n        }\n\n        return o;\n      }, g.prototype.getSchema = function (e) {\n        var r = y(this, e);\n\n        switch (_typeof(r)) {\n          case "object":\n            return r.validate || this._compile(r);\n\n          case "string":\n            return this.getSchema(r);\n\n          case "undefined":\n            return function (e, r) {\n              var t = d.schema.call(e, {\n                schema: {}\n              }, r);\n\n              if (t) {\n                var a = t.schema,\n                    s = t.root,\n                    o = t.baseId,\n                    i = n.call(e, a, s, void 0, o);\n                return e._fragments[r] = new f({\n                  ref: r,\n                  fragment: !0,\n                  schema: a,\n                  root: s,\n                  baseId: o,\n                  validate: i\n                }), i;\n              }\n            }(this, e);\n        }\n      }, g.prototype.removeSchema = function (e) {\n        if (e instanceof RegExp) return P(this, this._schemas, e), P(this, this._refs, e), this;\n\n        switch (_typeof(e)) {\n          case "undefined":\n            return P(this, this._schemas), P(this, this._refs), this._cache.clear(), this;\n\n          case "string":\n            var r = y(this, e);\n            return r && this._cache.del(r.cacheKey), delete this._schemas[e], delete this._refs[e], this;\n\n          case "object":\n            var t = this._opts.serialize,\n                a = t ? t(e) : e;\n\n            this._cache.del(a);\n\n            var s = this._getId(e);\n\n            s && (s = d.normalizeId(s), delete this._schemas[s], delete this._refs[s]);\n        }\n\n        return this;\n      }, g.prototype.addFormat = function (e, r) {\n        return "string" == typeof r && (r = new RegExp(r)), this._formats[e] = r, this;\n      }, g.prototype.errorsText = function (e, r) {\n        if (!(e = e || this.errors)) return "No errors";\n\n        for (var t = void 0 === (r = r || {}).separator ? ", " : r.separator, a = void 0 === r.dataVar ? "data" : r.dataVar, s = "", o = 0; o < e.length; o++) {\n          var i = e[o];\n          i && (s += a + i.dataPath + " " + i.message + t);\n        }\n\n        return s.slice(0, -t.length);\n      }, g.prototype._addSchema = function (e, r, t, a) {\n        if ("object" != _typeof(e) && "boolean" != typeof e) throw new Error("schema should be object or boolean");\n\n        var s = this._opts.serialize,\n            o = s ? s(e) : e,\n            i = this._cache.get(o);\n\n        if (i) return i;\n        a = a || !1 !== this._opts.addUsedSchema;\n        var n = d.normalizeId(this._getId(e));\n        n && a && b(this, n);\n        var l,\n            u = !1 !== this._opts.validateSchema && !r;\n        u && !(l = n && n == d.normalizeId(e.$schema)) && this.validateSchema(e, !0);\n        var c = d.ids.call(this, e),\n            h = new f({\n          id: n,\n          schema: e,\n          localRefs: c,\n          cacheKey: o,\n          meta: t\n        });\n        return "#" != n[0] && a && (this._refs[n] = h), this._cache.put(o, h), u && l && this.validateSchema(e, !0), h;\n      }, g.prototype._compile = function (t, e) {\n        function s() {\n          var e = t.validate,\n              r = e.apply(this, arguments);\n          return s.errors = e.errors, r;\n        }\n\n        if (t.compiling) return (t.validate = s).schema = t.schema, s.errors = null, s.root = e || s, !0 === t.schema.$async && (s.$async = !0), s;\n        var r, a;\n        t.compiling = !0, t.meta && (r = this._opts, this._opts = this._metaOpts);\n\n        try {\n          a = n.call(this, t.schema, e, t.localRefs);\n        } finally {\n          t.compiling = !1, t.meta && (this._opts = r);\n        }\n\n        return t.validate = a, t.refs = a.refs, t.refVal = a.refVal, t.root = a.root, a;\n      }, g.prototype.compileAsync = a("./compile/async");\n      var c = a("./keyword");\n      g.prototype.addKeyword = c.add, g.prototype.getKeyword = c.get, g.prototype.removeKeyword = c.remove;\n      var h = a("./compile/error_classes");\n      g.ValidationError = h.Validation, g.MissingRefError = h.MissingRef, g.$dataMetaSchema = l;\n      var p = "http://json-schema.org/draft-07/schema",\n          m = ["removeAdditional", "useDefaults", "coerceTypes"],\n          v = ["/properties"];\n    }, {\n      "./cache": 1,\n      "./compile": 5,\n      "./compile/async": 2,\n      "./compile/error_classes": 3,\n      "./compile/formats": 4,\n      "./compile/resolve": 6,\n      "./compile/rules": 7,\n      "./compile/schema_obj": 8,\n      "./compile/util": 10,\n      "./data": 11,\n      "./keyword": 38,\n      "./refs/data.json": 39,\n      "./refs/json-schema-draft-07.json": 40,\n      "fast-json-stable-stringify": 42\n    }]\n  }, {}, [])("ajv");\n});\n\nvar telemetrySchema = [{\n  $id: "http://api.ekstep.org/telemetry/actor",\n  type: "object",\n  properties: {\n    id: {\n      $id: "http://api.ekstep.org/telemetry/actor/id",\n      type: "string"\n    },\n    type: {\n      $id: "http://api.ekstep.org/telemetry/actor/type",\n      type: "string"\n    }\n  },\n  required: ["type", "id"]\n}, {\n  $id: "http://api.ekstep.org/telemetry/assess",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["ASSESS"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["item", "pass", "score", "resvalues", "duration"],\n        properties: {\n          item: {\n            $ref: "http://api.ekstep.org/telemetry/question"\n          },\n          index: {\n            $id: "http://api.ekstep.org/telemetry/edata/index",\n            type: "number"\n          },\n          pass: {\n            $id: "http://api.ekstep.org/telemetry/edata/pass",\n            type: "string"\n          },\n          score: {\n            $id: "http://api.ekstep.org/telemetry/edata/score",\n            type: "number"\n          },\n          resvalues: {\n            $id: "http://api.ekstep.org/telemetry/edata/resvalues",\n            type: "array",\n            items: {\n              type: "object"\n            }\n          },\n          duration: {\n            $id: "http://api.ekstep.org/telemetry/edata/duration",\n            type: "number"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/audit",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["AUDIT"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        properties: {\n          props: {\n            $id: "http://api.ekstep.org/telemetry/edata/props",\n            type: "array",\n            items: {\n              type: "string"\n            }\n          },\n          state: {\n            $id: "http://api.ekstep.org/telemetry/edata/state",\n            type: "string"\n          },\n          prevstate: {\n            $id: "http://api.ekstep.org/telemetry/edata/prevstate",\n            type: "string"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/cdata",\n  type: "array",\n  items: {\n    type: "object",\n    properties: {\n      type: {\n        $id: "http://api.ekstep.org/telemetry/cdata/type",\n        type: "string"\n      },\n      id: {\n        $id: "http://api.ekstep.org/telemetry/cdata/id",\n        type: "string"\n      }\n    },\n    additionalProperties: !1,\n    required: ["type", "id"]\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/common",\n  type: "object",\n  properties: {\n    ets: {\n      $id: "http://api.ekstep.org/telemetry/ets",\n      type: "number",\n      format: "date-time"\n    },\n    ver: {\n      $id: "http://api.ekstep.org/telemetry/ver",\n      type: "string",\n      enum: ["3.0"]\n    },\n    mid: {\n      $id: "http://api.ekstep.org/telemetry/mid",\n      type: "string",\n      minLength: 1\n    },\n    actor: {\n      $ref: "http://api.ekstep.org/telemetry/actor"\n    },\n    context: {\n      $ref: "http://api.ekstep.org/telemetry/context"\n    },\n    object: {\n      $ref: "http://api.ekstep.org/telemetry/object"\n    },\n    tags: {\n      type: "array",\n      items: {\n        type: "string"\n      }\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/context",\n  type: "object",\n  properties: {\n    channel: {\n      $id: "http://api.ekstep.org/telemetry/context/channel",\n      type: "string",\n      minLength: 1\n    },\n    pdata: {\n      $ref: "http://api.ekstep.org/telemetry/pdata"\n    },\n    env: {\n      $id: "http://api.ekstep.org/telemetry/context/env",\n      type: "string"\n    },\n    sid: {\n      $id: "http://api.ekstep.org/telemetry/context/sid",\n      type: "string"\n    },\n    did: {\n      $id: "http://api.ekstep.org/telemetry/context/did",\n      type: "string"\n    },\n    cdata: {\n      $ref: "http://api.ekstep.org/telemetry/cdata"\n    }\n  },\n  required: ["channel", "env", "pdata"]\n}, {\n  $id: "http://api.ekstep.org/telemetry/dspec",\n  type: "object",\n  properties: {\n    os: {\n      $id: "http://api.ekstep.org/telemetry/dspec/os",\n      type: "string"\n    },\n    make: {\n      $id: "http://api.ekstep.org/telemetry/dspec/make",\n      type: "string"\n    },\n    id: {\n      $id: "http://api.ekstep.org/telemetry/dspec/id",\n      type: "string"\n    },\n    mem: {\n      $id: "http://api.ekstep.org/telemetry/dspec/mem",\n      type: "number",\n      minimum: -1\n    },\n    idisk: {\n      $id: "http://api.ekstep.org/telemetry/dspec/idisk",\n      type: "number",\n      minimum: -1\n    },\n    edisk: {\n      $id: "http://api.ekstep.org/telemetry/dspec/edisk",\n      type: "number",\n      minimum: -1\n    },\n    scrn: {\n      $id: "http://api.ekstep.org/telemetry/dspec/scrn",\n      type: "number",\n      minimum: -1\n    },\n    camera: {\n      $id: "http://api.ekstep.org/telemetry/dspec/camera",\n      type: "string"\n    },\n    cpu: {\n      $id: "http://api.ekstep.org/telemetry/dspec/cpu",\n      type: "string"\n    },\n    sims: {\n      $id: "http://api.ekstep.org/telemetry/dspec/sims",\n      type: "number",\n      minimum: -1\n    },\n    cap: {\n      $id: "http://api.ekstep.org/telemetry/dspec/cap",\n      type: "array",\n      items: {\n        type: "string"\n      }\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/end",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["END"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["type"],\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          mode: {\n            $id: "http://api.ekstep.org/telemetry/edata/mode",\n            type: "string"\n          },\n          duration: {\n            $id: "http://api.ekstep.org/telemetry/edata/duration",\n            type: "number"\n          },\n          pageid: {\n            $id: "http://api.ekstep.org/telemetry/edata/pageid",\n            type: "string"\n          },\n          summary: {\n            $id: "http://api.ekstep.org/telemetry/edata/summary",\n            type: "array",\n            items: {\n              type: "object"\n            }\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/error",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["ERROR"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["err", "errtype", "stacktrace"],\n        properties: {\n          err: {\n            $id: "http://api.ekstep.org/telemetry/edata/err",\n            type: "string"\n          },\n          errtype: {\n            $id: "http://api.ekstep.org/telemetry/edata/errtype",\n            type: "string"\n          },\n          stacktrace: {\n            $id: "http://api.ekstep.org/telemetry/edata/stacktrace",\n            type: "string"\n          },\n          pageid: {\n            $id: "http://api.ekstep.org/telemetry/edata/pageid",\n            type: "string"\n          },\n          object: {\n            $ref: "http://api.ekstep.org/telemetry/inlineobject"\n          },\n          plugin: {\n            $ref: "http://api.ekstep.org/telemetry/plugin"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/exdata",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["EXDATA"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          data: {\n            $id: "http://api.ekstep.org/telemetry/edata/data",\n            type: "string"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/feedback",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["FEEDBACK"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        properties: {\n          rating: {\n            $id: "http://api.ekstep.org/telemetry/edata/rating",\n            type: "number"\n          },\n          comments: {\n            $id: "http://api.ekstep.org/telemetry/edata/comments",\n            type: "string"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/heartbeat",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["HEARTBEAT"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object"\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/impression",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["IMPRESSION"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["type", "pageid", "uri"],\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          subtype: {\n            $id: "http://api.ekstep.org/telemetry/edata/subtype",\n            type: "string"\n          },\n          pageid: {\n            $id: "http://api.ekstep.org/telemetry/edata/pageid",\n            type: "string"\n          },\n          uri: {\n            $id: "http://api.ekstep.org/telemetry/edata/uri",\n            type: "string"\n          },\n          visits: {\n            $id: "http://api.ekstep.org/telemetry/edata/visits",\n            type: "array",\n            items: {\n              type: "object",\n              properties: {\n                objid: {\n                  $id: "http://api.ekstep.org/telemetry/edata/visits/objid",\n                  type: "string"\n                },\n                objtype: {\n                  $id: "http://api.ekstep.org/telemetry/edata/visits/objtype",\n                  type: "string"\n                },\n                objver: {\n                  $id: "http://api.ekstep.org/telemetry/edata/visits/objver",\n                  type: "string"\n                },\n                section: {\n                  $id: "http://api.ekstep.org/telemetry/edata/visits/section",\n                  type: "string"\n                },\n                index: {\n                  $id: "http://api.ekstep.org/telemetry/edata/visits/index",\n                  type: "number"\n                }\n              },\n              additionalProperties: !1,\n              required: ["objid", "objtype"]\n            }\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/inlineobject",\n  type: "object",\n  additionalProperties: !1,\n  required: ["id", "type", "ver"],\n  properties: {\n    id: {\n      $id: "http://api.ekstep.org/telemetry/inlineobject/id",\n      type: "string"\n    },\n    type: {\n      $id: "http://api.ekstep.org/telemetry/inlineobject/type",\n      type: "string"\n    },\n    ver: {\n      $id: "http://api.ekstep.org/telemetry/inlineobject/ver",\n      type: "string"\n    },\n    subtype: {\n      $id: "http://api.ekstep.org/telemetry/inlineobject/subtype",\n      type: "string"\n    },\n    name: {\n      $id: "http://api.ekstep.org/telemetry/inlineobject/name",\n      type: "string"\n    },\n    code: {\n      $id: "http://api.ekstep.org/telemetry/inlineobject/code",\n      type: "string"\n    },\n    parent: {\n      $ref: "http://api.ekstep.org/telemetry/parent"\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/interact",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["INTERACT"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["type", "id"],\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          subtype: {\n            $id: "http://api.ekstep.org/telemetry/edata/subtype",\n            type: "string"\n          },\n          id: {\n            $id: "http://api.ekstep.org/telemetry/edata/id",\n            type: "string"\n          },\n          pageid: {\n            $id: "http://api.ekstep.org/telemetry/edata/pageid",\n            type: "string"\n          },\n          target: {\n            $ref: "http://api.ekstep.org/telemetry/target"\n          },\n          plugin: {\n            $ref: "http://api.ekstep.org/telemetry/plugin"\n          },\n          extra: {\n            $id: "http://api.ekstep.org/telemetry/edata/extra",\n            type: "object"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/interrupt",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["INTERRUPT"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["type"],\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          pageid: {\n            $id: "http://api.ekstep.org/telemetry/edata/pageid",\n            type: "string"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/items",\n  type: "array",\n  items: {\n    type: "object",\n    additionalProperties: !1,\n    properties: {\n      id: {\n        $id: "http://api.ekstep.org/telemetry/items/id",\n        type: "string"\n      },\n      type: {\n        $id: "http://api.ekstep.org/telemetry/items/type",\n        type: "string"\n      },\n      ver: {\n        $id: "http://api.ekstep.org/telemetry/items/ver",\n        type: "string"\n      },\n      params: {\n        $id: "http://api.ekstep.org/telemetry/items/params",\n        type: "array",\n        items: {\n          type: "object"\n        }\n      },\n      origin: {\n        $id: "http://api.ekstep.org/telemetry/items/origin",\n        type: "object",\n        properties: {\n          id: {\n            $id: "http://api.ekstep.org/telemetry/items/origin/id",\n            type: "string"\n          },\n          type: {\n            $id: "http://api.ekstep.org/telemetry/items/origin/type",\n            type: "string"\n          }\n        }\n      },\n      to: {\n        $id: "http://api.ekstep.org/telemetry/items/to",\n        type: "object",\n        properties: {\n          id: {\n            $id: "http://api.ekstep.org/telemetry/items/to/id",\n            type: "string"\n          },\n          type: {\n            $id: "http://api.ekstep.org/telemetry/items/to/type",\n            type: "string"\n          }\n        }\n      }\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/log",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["LOG"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["type", "level", "message"],\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          level: {\n            $id: "http://api.ekstep.org/telemetry/edata/level",\n            type: "string"\n          },\n          message: {\n            $id: "http://api.ekstep.org/telemetry/edata/message",\n            type: "string"\n          },\n          pageid: {\n            $id: "http://api.ekstep.org/telemetry/edata/pageid",\n            type: "string"\n          },\n          params: {\n            $id: "http://api.ekstep.org/telemetry/edata/params",\n            type: "array",\n            items: {\n              type: "object"\n            }\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/object",\n  type: "object",\n  properties: {\n    id: {\n      $id: "http://api.ekstep.org/telemetry/object/id",\n      type: "string"\n    },\n    type: {\n      $id: "http://api.ekstep.org/telemetry/object/type",\n      type: "string"\n    },\n    ver: {\n      $id: "http://api.ekstep.org/telemetry/object/ver",\n      type: "string"\n    },\n    rollup: {\n      $ref: "http://api.ekstep.org/telemetry/rollup"\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/parent",\n  type: "object",\n  properties: {\n    id: {\n      $id: "http://api.ekstep.org/telemetry/parent/id",\n      type: "string"\n    },\n    type: {\n      $id: "http://api.ekstep.org/telemetry/parent/type",\n      type: "string"\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/pdata",\n  type: "object",\n  properties: {\n    id: {\n      $id: "http://api.ekstep.org/telemetry/pdata/id",\n      type: "string"\n    },\n    pid: {\n      $id: "http://api.ekstep.org/telemetry/pdata/pid",\n      type: "string"\n    },\n    ver: {\n      $id: "http://api.ekstep.org/telemetry/pdata/ver",\n      type: "string"\n    }\n  },\n  required: ["id"]\n}, {\n  $id: "http://api.ekstep.org/telemetry/plugin",\n  type: "object",\n  additionalProperties: !1,\n  required: ["id", "ver"],\n  properties: {\n    id: {\n      $id: "http://api.ekstep.org/telemetry/plugin/id",\n      type: "string"\n    },\n    ver: {\n      $id: "http://api.ekstep.org/telemetry/plugin/ver",\n      type: "string"\n    },\n    category: {\n      $id: "http://api.ekstep.org/telemetry/plugin/category",\n      type: "string"\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/question",\n  type: "object",\n  additionalProperties: !1,\n  required: ["id"],\n  properties: {\n    id: {\n      $id: "http://api.ekstep.org/telemetry/question/id",\n      type: "string"\n    },\n    maxscore: {\n      $id: "http://api.ekstep.org/telemetry/question/maxscore",\n      type: "number"\n    },\n    exlength: {\n      $id: "http://api.ekstep.org/telemetry/question/exlength",\n      type: "number"\n    },\n    params: {\n      $id: "http://api.ekstep.org/telemetry/question/params",\n      type: "array",\n      items: {\n        type: "object"\n      }\n    },\n    uri: {\n      $id: "http://api.ekstep.org/telemetry/question/uri",\n      type: "string"\n    },\n    desc: {\n      $id: "http://api.ekstep.org/telemetry/question/desc",\n      type: "string"\n    },\n    title: {\n      $id: "http://api.ekstep.org/telemetry/question/title",\n      type: "string"\n    },\n    mmc: {\n      $id: "http://api.ekstep.org/telemetry/question/mmc",\n      type: "array",\n      items: {\n        type: "string"\n      }\n    },\n    mc: {\n      $id: "http://api.ekstep.org/telemetry/question/mc",\n      type: "array",\n      items: {\n        type: "string"\n      }\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/response",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["RESPONSE"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["target", "type", "values"],\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/type",\n            type: "string"\n          },\n          target: {\n            $ref: "http://api.ekstep.org/telemetry/target"\n          },\n          values: {\n            type: "array",\n            items: {\n              type: "object"\n            }\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/rollup",\n  type: "object",\n  properties: {\n    l1: {\n      $id: "http://api.ekstep.org/telemetry/context/rollup/l1",\n      type: "string"\n    },\n    l2: {\n      $id: "http://api.ekstep.org/telemetry/context/rollup/l2",\n      type: "string"\n    },\n    l3: {\n      $id: "http://api.ekstep.org/telemetry/context/rollup/l3",\n      type: "string"\n    },\n    l4: {\n      $id: "http://api.ekstep.org/telemetry/context/rollup/l4",\n      type: "string"\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/search",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["SEARCH"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["query", "size", "topn"],\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          query: {\n            $id: "http://api.ekstep.org/telemetry/edata/query",\n            type: "string"\n          },\n          filters: {\n            $id: "http://api.ekstep.org/telemetry/edata/filters",\n            type: "object"\n          },\n          sort: {\n            $id: "http://api.ekstep.org/telemetry/edata/sort",\n            type: "object"\n          },\n          correlationid: {\n            $id: "http://api.ekstep.org/telemetry/edata/correlationid",\n            type: "string"\n          },\n          size: {\n            $id: "http://api.ekstep.org/telemetry/edata/size",\n            type: "number"\n          },\n          topn: {\n            $id: "http://api.ekstep.org/telemetry/edata/topn",\n            type: "array",\n            items: {\n              type: "object"\n            }\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/share",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["SHARE"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["items"],\n        properties: {\n          dir: {\n            $id: "http://api.ekstep.org/telemetry/edata/dir",\n            type: "string"\n          },\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          items: {\n            $ref: "http://api.ekstep.org/telemetry/items"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/start",\n  type: "object",\n  required: ["eid", "ets", "ver", "mid", "actor", "context", "edata"],\n  allOf: [{\n    $ref: "http://api.ekstep.org/telemetry/common"\n  }, {\n    properties: {\n      eid: {\n        $id: "http://api.ekstep.org/telemetry/eid",\n        enum: ["START"]\n      },\n      edata: {\n        $id: "http://api.ekstep.org/telemetry/edata",\n        type: "object",\n        additionalProperties: !1,\n        required: ["type"],\n        properties: {\n          type: {\n            $id: "http://api.ekstep.org/telemetry/edata/type",\n            type: "string"\n          },\n          dspec: {\n            $ref: "http://api.ekstep.org/telemetry/dspec"\n          },\n          uaspec: {\n            $ref: "http://api.ekstep.org/telemetry/uaspec"\n          },\n          loc: {\n            $id: "http://api.ekstep.org/telemetry/edata/loc",\n            type: "string"\n          },\n          mode: {\n            $id: "http://api.ekstep.org/telemetry/edata/mode",\n            type: "string"\n          },\n          duration: {\n            $id: "http://api.ekstep.org/telemetry/edata/duration",\n            type: "number"\n          },\n          pageid: {\n            $id: "http://api.ekstep.org/telemetry/edata/pageid",\n            type: "string"\n          }\n        }\n      }\n    }\n  }]\n}, {\n  $id: "http://api.ekstep.org/telemetry/target",\n  type: "object",\n  additionalProperties: !1,\n  required: ["id", "ver", "type"],\n  properties: {\n    id: {\n      $id: "http://api.ekstep.org/telemetry/target/id",\n      type: "string"\n    },\n    ver: {\n      $id: "http://api.ekstep.org/telemetry/target/ver",\n      type: "string"\n    },\n    type: {\n      $id: "http://api.ekstep.org/telemetry/target/type",\n      type: "string"\n    },\n    parent: {\n      $ref: "http://api.ekstep.org/telemetry/parent"\n    }\n  }\n}, {\n  $id: "http://api.ekstep.org/telemetry/uaspec",\n  type: "object",\n  properties: {\n    agent: {\n      $id: "http://api.ekstep.org/telemetry/uaspec/agent",\n      type: "string"\n    },\n    ver: {\n      $id: "http://api.ekstep.org/telemetry/uaspec/ver",\n      type: "string"\n    },\n    system: {\n      $id: "http://api.ekstep.org/telemetry/uaspec/system",\n      type: "string"\n    },\n    platform: {\n      $id: "http://api.ekstep.org/telemetry/uaspec/platform",\n      type: "string"\n    },\n    raw: {\n      $id: "http://api.ekstep.org/telemetry/uaspec/raw",\n      type: "string"\n    }\n  }\n}],\n    detectClient = function detectClient() {\n  var verOffset,\n      ix,\n      nAgt = navigator.userAgent,\n      browserName = navigator.appName,\n      fullVersion = "" + parseFloat(navigator.appVersion);\n  return -1 != (verOffset = nAgt.indexOf("Opera")) ? (browserName = "opera", fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("MSIE")) ? (browserName = "IE", fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (browserName = "chrome", fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (browserName = "safari", fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) && (browserName = "firefox", fullVersion = nAgt.substring(verOffset + 8)), -1 != (ix = fullVersion.indexOf(";")) && (fullVersion = fullVersion.substring(0, ix)), -1 != (ix = fullVersion.indexOf(" ")) && (fullVersion = fullVersion.substring(0, ix)), {\n    browser: browserName,\n    browserver: fullVersion,\n    os: navigator.platform\n  };\n},\n    CryptoJS = CryptoJS || function (s, p) {\n  var m = {},\n      l = m.lib = {},\n      n = function n() {},\n      r = l.Base = {\n    extend: function extend(b) {\n      n.prototype = this;\n      var h = new n();\n      return b && h.mixIn(b), h.hasOwnProperty("init") || (h.init = function () {\n        h.$super.init.apply(this, arguments);\n      }), h.init.prototype = h, h.$super = this, h;\n    },\n    create: function create() {\n      var b = this.extend();\n      return b.init.apply(b, arguments), b;\n    },\n    init: function init() {},\n    mixIn: function mixIn(b) {\n      for (var h in b) {\n        b.hasOwnProperty(h) && (this[h] = b[h]);\n      }\n\n      b.hasOwnProperty("toString") && (this.toString = b.toString);\n    },\n    clone: function clone() {\n      return this.init.prototype.extend(this);\n    }\n  },\n      q = l.WordArray = r.extend({\n    init: function init(b, h) {\n      b = this.words = b || [], this.sigBytes = h != p ? h : 4 * b.length;\n    },\n    toString: function toString(b) {\n      return (b || t).stringify(this);\n    },\n    concat: function concat(b) {\n      var h = this.words,\n          a = b.words,\n          j = this.sigBytes;\n      if (b = b.sigBytes, this.clamp(), j % 4) for (var g = 0; g < b; g++) {\n        h[j + g >>> 2] |= (a[g >>> 2] >>> 24 - g % 4 * 8 & 255) << 24 - (j + g) % 4 * 8;\n      } else if (65535 < a.length) for (g = 0; g < b; g += 4) {\n        h[j + g >>> 2] = a[g >>> 2];\n      } else h.push.apply(h, a);\n      return this.sigBytes += b, this;\n    },\n    clamp: function clamp() {\n      var b = this.words,\n          h = this.sigBytes;\n      b[h >>> 2] &= 4294967295 << 32 - h % 4 * 8, b.length = s.ceil(h / 4);\n    },\n    clone: function clone() {\n      var b = r.clone.call(this);\n      return b.words = this.words.slice(0), b;\n    },\n    random: function random(b) {\n      for (var h = [], a = 0; a < b; a += 4) {\n        h.push(4294967296 * s.random() | 0);\n      }\n\n      return new q.init(h, b);\n    }\n  }),\n      v = m.enc = {},\n      t = v.Hex = {\n    stringify: function stringify(b) {\n      var a = b.words;\n      b = b.sigBytes;\n\n      for (var g = [], j = 0; j < b; j++) {\n        var k = a[j >>> 2] >>> 24 - j % 4 * 8 & 255;\n        g.push((k >>> 4).toString(16)), g.push((15 & k).toString(16));\n      }\n\n      return g.join("");\n    },\n    parse: function parse(b) {\n      for (var a = b.length, g = [], j = 0; j < a; j += 2) {\n        g[j >>> 3] |= parseInt(b.substr(j, 2), 16) << 24 - j % 8 * 4;\n      }\n\n      return new q.init(g, a / 2);\n    }\n  },\n      a = v.Latin1 = {\n    stringify: function stringify(b) {\n      var a = b.words;\n      b = b.sigBytes;\n\n      for (var g = [], j = 0; j < b; j++) {\n        g.push(String.fromCharCode(a[j >>> 2] >>> 24 - j % 4 * 8 & 255));\n      }\n\n      return g.join("");\n    },\n    parse: function parse(b) {\n      for (var a = b.length, g = [], j = 0; j < a; j++) {\n        g[j >>> 2] |= (255 & b.charCodeAt(j)) << 24 - j % 4 * 8;\n      }\n\n      return new q.init(g, a);\n    }\n  },\n      u = v.Utf8 = {\n    stringify: function stringify(b) {\n      try {\n        return decodeURIComponent(escape(a.stringify(b)));\n      } catch (g) {\n        throw Error("Malformed UTF-8 data");\n      }\n    },\n    parse: function parse(b) {\n      return a.parse(unescape(encodeURIComponent(b)));\n    }\n  },\n      g = l.BufferedBlockAlgorithm = r.extend({\n    reset: function reset() {\n      this._data = new q.init(), this._nDataBytes = 0;\n    },\n    _append: function _append(b) {\n      "string" == typeof b && (b = u.parse(b)), this._data.concat(b), this._nDataBytes += b.sigBytes;\n    },\n    _process: function _process(b) {\n      var a = this._data,\n          g = a.words,\n          j = a.sigBytes,\n          k = this.blockSize,\n          m = j / (4 * k),\n          m = b ? s.ceil(m) : s.max((0 | m) - this._minBufferSize, 0);\n\n      if (b = m * k, j = s.min(4 * b, j), b) {\n        for (var l = 0; l < b; l += k) {\n          this._doProcessBlock(g, l);\n        }\n\n        l = g.splice(0, b), a.sigBytes -= j;\n      }\n\n      return new q.init(l, j);\n    },\n    clone: function clone() {\n      var b = r.clone.call(this);\n      return b._data = this._data.clone(), b;\n    },\n    _minBufferSize: 0\n  });\n\n  l.Hasher = g.extend({\n    cfg: r.extend(),\n    init: function init(b) {\n      this.cfg = this.cfg.extend(b), this.reset();\n    },\n    reset: function reset() {\n      g.reset.call(this), this._doReset();\n    },\n    update: function update(b) {\n      return this._append(b), this._process(), this;\n    },\n    finalize: function finalize(b) {\n      return b && this._append(b), this._doFinalize();\n    },\n    blockSize: 16,\n    _createHelper: function _createHelper(b) {\n      return function (a, g) {\n        return new b.init(g).finalize(a);\n      };\n    },\n    _createHmacHelper: function _createHmacHelper(b) {\n      return function (a, g) {\n        return new k.HMAC.init(b, g).finalize(a);\n      };\n    }\n  });\n  var k = m.algo = {};\n  return m;\n}(Math);\n\n!function (s) {\n  function p(a, k, b, h, l, j, m) {\n    return ((a = a + (k & b | ~k & h) + l + m) << j | a >>> 32 - j) + k;\n  }\n\n  function m(a, k, b, h, l, j, m) {\n    return ((a = a + (k & h | b & ~h) + l + m) << j | a >>> 32 - j) + k;\n  }\n\n  function l(a, k, b, h, l, j, m) {\n    return ((a = a + (k ^ b ^ h) + l + m) << j | a >>> 32 - j) + k;\n  }\n\n  function n(a, k, b, h, l, j, m) {\n    return ((a = a + (b ^ (k | ~h)) + l + m) << j | a >>> 32 - j) + k;\n  }\n\n  for (var r = CryptoJS, q = r.lib, v = q.WordArray, t = q.Hasher, q = r.algo, a = [], u = 0; 64 > u; u++) {\n    a[u] = 4294967296 * s.abs(s.sin(u + 1)) | 0;\n  }\n\n  q = q.MD5 = t.extend({\n    _doReset: function _doReset() {\n      this._hash = new v.init([1732584193, 4023233417, 2562383102, 271733878]);\n    },\n    _doProcessBlock: function _doProcessBlock(g, k) {\n      for (var b = 0; 16 > b; b++) {\n        var h = k + b,\n            w = g[h];\n        g[h] = 16711935 & (w << 8 | w >>> 24) | 4278255360 & (w << 24 | w >>> 8);\n      }\n\n      var b = this._hash.words,\n          h = g[k + 0],\n          w = g[k + 1],\n          j = g[k + 2],\n          q = g[k + 3],\n          r = g[k + 4],\n          s = g[k + 5],\n          t = g[k + 6],\n          u = g[k + 7],\n          v = g[k + 8],\n          x = g[k + 9],\n          y = g[k + 10],\n          z = g[k + 11],\n          A = g[k + 12],\n          B = g[k + 13],\n          C = g[k + 14],\n          D = g[k + 15],\n          c = b[0],\n          d = b[1],\n          e = b[2],\n          f = b[3],\n          c = p(c, d, e, f, h, 7, a[0]),\n          f = p(f, c, d, e, w, 12, a[1]),\n          e = p(e, f, c, d, j, 17, a[2]),\n          d = p(d, e, f, c, q, 22, a[3]),\n          c = p(c, d, e, f, r, 7, a[4]),\n          f = p(f, c, d, e, s, 12, a[5]),\n          e = p(e, f, c, d, t, 17, a[6]),\n          d = p(d, e, f, c, u, 22, a[7]),\n          c = p(c, d, e, f, v, 7, a[8]),\n          f = p(f, c, d, e, x, 12, a[9]),\n          e = p(e, f, c, d, y, 17, a[10]),\n          d = p(d, e, f, c, z, 22, a[11]),\n          c = p(c, d, e, f, A, 7, a[12]),\n          f = p(f, c, d, e, B, 12, a[13]),\n          e = p(e, f, c, d, C, 17, a[14]),\n          d = p(d, e, f, c, D, 22, a[15]),\n          c = m(c, d, e, f, w, 5, a[16]),\n          f = m(f, c, d, e, t, 9, a[17]),\n          e = m(e, f, c, d, z, 14, a[18]),\n          d = m(d, e, f, c, h, 20, a[19]),\n          c = m(c, d, e, f, s, 5, a[20]),\n          f = m(f, c, d, e, y, 9, a[21]),\n          e = m(e, f, c, d, D, 14, a[22]),\n          d = m(d, e, f, c, r, 20, a[23]),\n          c = m(c, d, e, f, x, 5, a[24]),\n          f = m(f, c, d, e, C, 9, a[25]),\n          e = m(e, f, c, d, q, 14, a[26]),\n          d = m(d, e, f, c, v, 20, a[27]),\n          c = m(c, d, e, f, B, 5, a[28]),\n          f = m(f, c, d, e, j, 9, a[29]),\n          e = m(e, f, c, d, u, 14, a[30]),\n          d = m(d, e, f, c, A, 20, a[31]),\n          c = l(c, d, e, f, s, 4, a[32]),\n          f = l(f, c, d, e, v, 11, a[33]),\n          e = l(e, f, c, d, z, 16, a[34]),\n          d = l(d, e, f, c, C, 23, a[35]),\n          c = l(c, d, e, f, w, 4, a[36]),\n          f = l(f, c, d, e, r, 11, a[37]),\n          e = l(e, f, c, d, u, 16, a[38]),\n          d = l(d, e, f, c, y, 23, a[39]),\n          c = l(c, d, e, f, B, 4, a[40]),\n          f = l(f, c, d, e, h, 11, a[41]),\n          e = l(e, f, c, d, q, 16, a[42]),\n          d = l(d, e, f, c, t, 23, a[43]),\n          c = l(c, d, e, f, x, 4, a[44]),\n          f = l(f, c, d, e, A, 11, a[45]),\n          e = l(e, f, c, d, D, 16, a[46]),\n          d = l(d, e, f, c, j, 23, a[47]),\n          c = n(c, d, e, f, h, 6, a[48]),\n          f = n(f, c, d, e, u, 10, a[49]),\n          e = n(e, f, c, d, C, 15, a[50]),\n          d = n(d, e, f, c, s, 21, a[51]),\n          c = n(c, d, e, f, A, 6, a[52]),\n          f = n(f, c, d, e, q, 10, a[53]),\n          e = n(e, f, c, d, y, 15, a[54]),\n          d = n(d, e, f, c, w, 21, a[55]),\n          c = n(c, d, e, f, v, 6, a[56]),\n          f = n(f, c, d, e, D, 10, a[57]),\n          e = n(e, f, c, d, t, 15, a[58]),\n          d = n(d, e, f, c, B, 21, a[59]),\n          c = n(c, d, e, f, r, 6, a[60]),\n          f = n(f, c, d, e, z, 10, a[61]),\n          e = n(e, f, c, d, j, 15, a[62]),\n          d = n(d, e, f, c, x, 21, a[63]);\n      b[0] = b[0] + c | 0, b[1] = b[1] + d | 0, b[2] = b[2] + e | 0, b[3] = b[3] + f | 0;\n    },\n    _doFinalize: function _doFinalize() {\n      var a = this._data,\n          k = a.words,\n          b = 8 * this._nDataBytes,\n          h = 8 * a.sigBytes;\n      k[h >>> 5] |= 128 << 24 - h % 32;\n      var l = s.floor(b / 4294967296);\n\n      for (k[15 + (h + 64 >>> 9 << 4)] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8), k[14 + (h + 64 >>> 9 << 4)] = 16711935 & (b << 8 | b >>> 24) | 4278255360 & (b << 24 | b >>> 8), a.sigBytes = 4 * (k.length + 1), this._process(), a = this._hash, k = a.words, b = 0; 4 > b; b++) {\n        h = k[b], k[b] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);\n      }\n\n      return a;\n    },\n    clone: function clone() {\n      var a = t.clone.call(this);\n      return a._hash = this._hash.clone(), a;\n    }\n  }), r.MD5 = t._createHelper(q), r.HmacMD5 = t._createHmacHelper(q);\n}(Math), function (name, context, definition) {\n  "use strict";\n\n  "undefined" != typeof window && ("function" == typeof window.define && window.define.amd ? window.define(definition) : "undefined" != typeof module && module.exports ? module.exports = definition() : context.exports ? context.exports = definition() : context[name] = definition());\n}("Fingerprint2", this, function () {\n  "use strict";\n\n  var Fingerprint2 = function Fingerprint2(options) {\n    if (!(this instanceof Fingerprint2)) return new Fingerprint2(options);\n    var defaultOptions = {\n      swfContainerId: "fingerprintjs2",\n      swfPath: "flash/compiled/FontList.swf",\n      detectScreenOrientation: !0,\n      sortPluginsFor: [/palemoon/i],\n      userDefinedFonts: []\n    };\n    this.options = this.extend(options, defaultOptions), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map;\n  };\n\n  return Fingerprint2.prototype = {\n    extend: function extend(source, target) {\n      if (null == source) return target;\n\n      for (var k in source) {\n        null != source[k] && target[k] !== source[k] && (target[k] = source[k]);\n      }\n\n      return target;\n    },\n    get: function get(done) {\n      var that = this,\n          keys = {\n        data: [],\n        addPreprocessedComponent: function addPreprocessedComponent(pair) {\n          var componentValue = pair.value;\n          "function" == typeof that.options.preprocessor && (componentValue = that.options.preprocessor(pair.key, componentValue)), keys.data.push({\n            key: pair.key,\n            value: componentValue\n          });\n        }\n      };\n      keys = this.userAgentKey(keys), keys = this.languageKey(keys), keys = this.colorDepthKey(keys), keys = this.deviceMemoryKey(keys), keys = this.pixelRatioKey(keys), keys = this.hardwareConcurrencyKey(keys), keys = this.screenResolutionKey(keys), keys = this.availableScreenResolutionKey(keys), keys = this.timezoneOffsetKey(keys), keys = this.sessionStorageKey(keys), keys = this.localStorageKey(keys), keys = this.indexedDbKey(keys), keys = this.addBehaviorKey(keys), keys = this.openDatabaseKey(keys), keys = this.cpuClassKey(keys), keys = this.platformKey(keys), keys = this.doNotTrackKey(keys), keys = this.pluginsKey(keys), keys = this.canvasKey(keys), keys = this.webglKey(keys), keys = this.webglVendorAndRendererKey(keys), keys = this.adBlockKey(keys), keys = this.hasLiedLanguagesKey(keys), keys = this.hasLiedResolutionKey(keys), keys = this.hasLiedOsKey(keys), keys = this.hasLiedBrowserKey(keys), keys = this.touchSupportKey(keys), keys = this.customEntropyFunction(keys), this.fontsKey(keys, function (newKeys) {\n        var values = [];\n        that.each(newKeys.data, function (pair) {\n          var value = pair.value;\n          value && "function" == typeof value.join && (value = value.join(";")), values.push(value);\n        });\n        var murmur = that.x64hash128(values.join("~~~"), 31);\n        return done(murmur, newKeys.data);\n      });\n    },\n    customEntropyFunction: function customEntropyFunction(keys) {\n      return "function" == typeof this.options.customFunction && keys.addPreprocessedComponent({\n        key: "custom",\n        value: this.options.customFunction()\n      }), keys;\n    },\n    userAgentKey: function userAgentKey(keys) {\n      return this.options.excludeUserAgent || keys.addPreprocessedComponent({\n        key: "user_agent",\n        value: this.getUserAgent()\n      }), keys;\n    },\n    getUserAgent: function getUserAgent() {\n      return navigator.userAgent;\n    },\n    languageKey: function languageKey(keys) {\n      return this.options.excludeLanguage || keys.addPreprocessedComponent({\n        key: "language",\n        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""\n      }), keys;\n    },\n    colorDepthKey: function colorDepthKey(keys) {\n      return this.options.excludeColorDepth || keys.addPreprocessedComponent({\n        key: "color_depth",\n        value: window.screen.colorDepth || -1\n      }), keys;\n    },\n    deviceMemoryKey: function deviceMemoryKey(keys) {\n      return this.options.excludeDeviceMemory || keys.addPreprocessedComponent({\n        key: "device_memory",\n        value: this.getDeviceMemory()\n      }), keys;\n    },\n    getDeviceMemory: function getDeviceMemory() {\n      return navigator.deviceMemory || -1;\n    },\n    pixelRatioKey: function pixelRatioKey(keys) {\n      return this.options.excludePixelRatio || keys.addPreprocessedComponent({\n        key: "pixel_ratio",\n        value: this.getPixelRatio()\n      }), keys;\n    },\n    getPixelRatio: function getPixelRatio() {\n      return window.devicePixelRatio || "";\n    },\n    screenResolutionKey: function screenResolutionKey(keys) {\n      return this.options.excludeScreenResolution ? keys : this.getScreenResolution(keys);\n    },\n    getScreenResolution: function getScreenResolution(keys) {\n      var resolution;\n      return resolution = this.options.detectScreenOrientation && window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height], keys.addPreprocessedComponent({\n        key: "resolution",\n        value: resolution\n      }), keys;\n    },\n    availableScreenResolutionKey: function availableScreenResolutionKey(keys) {\n      return this.options.excludeAvailableScreenResolution ? keys : this.getAvailableScreenResolution(keys);\n    },\n    getAvailableScreenResolution: function getAvailableScreenResolution(keys) {\n      var available;\n      return window.screen.availWidth && window.screen.availHeight && (available = this.options.detectScreenOrientation ? window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]), void 0 !== available && keys.addPreprocessedComponent({\n        key: "available_resolution",\n        value: available\n      }), keys;\n    },\n    timezoneOffsetKey: function timezoneOffsetKey(keys) {\n      return this.options.excludeTimezoneOffset || keys.addPreprocessedComponent({\n        key: "timezone_offset",\n        value: new Date().getTimezoneOffset()\n      }), keys;\n    },\n    sessionStorageKey: function sessionStorageKey(keys) {\n      return !this.options.excludeSessionStorage && this.hasSessionStorage() && keys.addPreprocessedComponent({\n        key: "session_storage",\n        value: 1\n      }), keys;\n    },\n    localStorageKey: function localStorageKey(keys) {\n      return !this.options.excludeSessionStorage && this.hasLocalStorage() && keys.addPreprocessedComponent({\n        key: "local_storage",\n        value: 1\n      }), keys;\n    },\n    indexedDbKey: function indexedDbKey(keys) {\n      return !this.options.excludeIndexedDB && this.hasIndexedDB() && keys.addPreprocessedComponent({\n        key: "indexed_db",\n        value: 1\n      }), keys;\n    },\n    addBehaviorKey: function addBehaviorKey(keys) {\n      return !this.options.excludeAddBehavior && document.body && document.body.addBehavior && keys.addPreprocessedComponent({\n        key: "add_behavior",\n        value: 1\n      }), keys;\n    },\n    openDatabaseKey: function openDatabaseKey(keys) {\n      return !this.options.excludeOpenDatabase && window.openDatabase && keys.addPreprocessedComponent({\n        key: "open_database",\n        value: 1\n      }), keys;\n    },\n    cpuClassKey: function cpuClassKey(keys) {\n      return this.options.excludeCpuClass || keys.addPreprocessedComponent({\n        key: "cpu_class",\n        value: this.getNavigatorCpuClass()\n      }), keys;\n    },\n    platformKey: function platformKey(keys) {\n      return this.options.excludePlatform || keys.addPreprocessedComponent({\n        key: "navigator_platform",\n        value: this.getNavigatorPlatform()\n      }), keys;\n    },\n    doNotTrackKey: function doNotTrackKey(keys) {\n      return this.options.excludeDoNotTrack || keys.addPreprocessedComponent({\n        key: "do_not_track",\n        value: this.getDoNotTrack()\n      }), keys;\n    },\n    canvasKey: function canvasKey(keys) {\n      return !this.options.excludeCanvas && this.isCanvasSupported() && keys.addPreprocessedComponent({\n        key: "canvas",\n        value: this.getCanvasFp()\n      }), keys;\n    },\n    webglKey: function webglKey(keys) {\n      return !this.options.excludeWebGL && this.isWebGlSupported() && keys.addPreprocessedComponent({\n        key: "webgl",\n        value: this.getWebglFp()\n      }), keys;\n    },\n    webglVendorAndRendererKey: function webglVendorAndRendererKey(keys) {\n      return !this.options.excludeWebGLVendorAndRenderer && this.isWebGlSupported() && keys.addPreprocessedComponent({\n        key: "webgl_vendor",\n        value: this.getWebglVendorAndRenderer()\n      }), keys;\n    },\n    adBlockKey: function adBlockKey(keys) {\n      return this.options.excludeAdBlock || keys.addPreprocessedComponent({\n        key: "adblock",\n        value: this.getAdBlock()\n      }), keys;\n    },\n    hasLiedLanguagesKey: function hasLiedLanguagesKey(keys) {\n      return this.options.excludeHasLiedLanguages || keys.addPreprocessedComponent({\n        key: "has_lied_languages",\n        value: this.getHasLiedLanguages()\n      }), keys;\n    },\n    hasLiedResolutionKey: function hasLiedResolutionKey(keys) {\n      return this.options.excludeHasLiedResolution || keys.addPreprocessedComponent({\n        key: "has_lied_resolution",\n        value: this.getHasLiedResolution()\n      }), keys;\n    },\n    hasLiedOsKey: function hasLiedOsKey(keys) {\n      return this.options.excludeHasLiedOs || keys.addPreprocessedComponent({\n        key: "has_lied_os",\n        value: this.getHasLiedOs()\n      }), keys;\n    },\n    hasLiedBrowserKey: function hasLiedBrowserKey(keys) {\n      return this.options.excludeHasLiedBrowser || keys.addPreprocessedComponent({\n        key: "has_lied_browser",\n        value: this.getHasLiedBrowser()\n      }), keys;\n    },\n    fontsKey: function fontsKey(keys, done) {\n      return this.options.excludeJsFonts ? this.flashFontsKey(keys, done) : this.jsFontsKey(keys, done);\n    },\n    flashFontsKey: function flashFontsKey(keys, done) {\n      return this.options.excludeFlashFonts ? done(keys) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? done(keys) : void this.loadSwfAndDetectFonts(function (fonts) {\n        keys.addPreprocessedComponent({\n          key: "swf_fonts",\n          value: fonts.join(";")\n        }), done(keys);\n      }) : done(keys);\n    },\n    jsFontsKey: function jsFontsKey(keys, done) {\n      var that = this;\n      return setTimeout(function () {\n        var baseFonts = ["monospace", "sans-serif", "serif"],\n            fontList = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],\n            extendedFontList = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];\n        that.options.extendedJsFonts && (fontList = fontList.concat(extendedFontList)), fontList = fontList.concat(that.options.userDefinedFonts);\n\n        var testString = "mmmmmmmmmmlli",\n            testSize = "72px",\n            h = document.getElementsByTagName("body")[0],\n            baseFontsDiv = document.createElement("div"),\n            fontsDiv = document.createElement("div"),\n            defaultWidth = {},\n            defaultHeight = {},\n            createSpan = function createSpan() {\n          var s = document.createElement("span");\n          return s.style.position = "absolute", s.style.left = "-9999px", s.style.fontSize = testSize, s.style.lineHeight = "normal", s.innerHTML = testString, s;\n        },\n            createSpanWithFonts = function createSpanWithFonts(fontToDetect, baseFont) {\n          var s = createSpan();\n          return s.style.fontFamily = "\'" + fontToDetect + "\'," + baseFont, s;\n        },\n            initializeBaseFontsSpans = function initializeBaseFontsSpans() {\n          for (var spans = [], index = 0, length = baseFonts.length; index < length; index++) {\n            var s = createSpan();\n            s.style.fontFamily = baseFonts[index], baseFontsDiv.appendChild(s), spans.push(s);\n          }\n\n          return spans;\n        },\n            initializeFontsSpans = function initializeFontsSpans() {\n          for (var spans = {}, i = 0, l = fontList.length; i < l; i++) {\n            for (var fontSpans = [], j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {\n              var s = createSpanWithFonts(fontList[i], baseFonts[j]);\n              fontsDiv.appendChild(s), fontSpans.push(s);\n            }\n\n            spans[fontList[i]] = fontSpans;\n          }\n\n          return spans;\n        },\n            isFontAvailable = function isFontAvailable(fontSpans) {\n          for (var detected = !1, i = 0; i < baseFonts.length; i++) {\n            if (detected = fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]]) return detected;\n          }\n\n          return detected;\n        },\n            baseFontsSpans = initializeBaseFontsSpans();\n\n        h.appendChild(baseFontsDiv);\n\n        for (var index = 0, length = baseFonts.length; index < length; index++) {\n          defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth, defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight;\n        }\n\n        var fontsSpans = initializeFontsSpans();\n        h.appendChild(fontsDiv);\n\n        for (var available = [], i = 0, l = fontList.length; i < l; i++) {\n          isFontAvailable(fontsSpans[fontList[i]]) && available.push(fontList[i]);\n        }\n\n        h.removeChild(fontsDiv), h.removeChild(baseFontsDiv), keys.addPreprocessedComponent({\n          key: "js_fonts",\n          value: available\n        }), done(keys);\n      }, 1);\n    },\n    pluginsKey: function pluginsKey(keys) {\n      return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || keys.addPreprocessedComponent({\n        key: "ie_plugins",\n        value: this.getIEPlugins()\n      }) : keys.addPreprocessedComponent({\n        key: "regular_plugins",\n        value: this.getRegularPlugins()\n      })), keys;\n    },\n    getRegularPlugins: function getRegularPlugins() {\n      var plugins = [];\n      if (navigator.plugins) for (var i = 0, l = navigator.plugins.length; i < l; i++) {\n        navigator.plugins[i] && plugins.push(navigator.plugins[i]);\n      }\n      return this.pluginsShouldBeSorted() && (plugins = plugins.sort(function (a, b) {\n        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;\n      })), this.map(plugins, function (p) {\n        var mimeTypes = this.map(p, function (mt) {\n          return [mt.type, mt.suffixes].join("~");\n        }).join(",");\n        return [p.name, p.description, mimeTypes].join("::");\n      }, this);\n    },\n    getIEPlugins: function getIEPlugins() {\n      var result = [];\n\n      if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {\n        var names = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];\n        result = this.map(names, function (name) {\n          try {\n            return new window.ActiveXObject(name), name;\n          } catch (e) {\n            return null;\n          }\n        });\n      }\n\n      return navigator.plugins && (result = result.concat(this.getRegularPlugins())), result;\n    },\n    pluginsShouldBeSorted: function pluginsShouldBeSorted() {\n      for (var should = !1, i = 0, l = this.options.sortPluginsFor.length; i < l; i++) {\n        var re = this.options.sortPluginsFor[i];\n\n        if (navigator.userAgent.match(re)) {\n          should = !0;\n          break;\n        }\n      }\n\n      return should;\n    },\n    touchSupportKey: function touchSupportKey(keys) {\n      return this.options.excludeTouchSupport || keys.addPreprocessedComponent({\n        key: "touch_support",\n        value: this.getTouchSupport()\n      }), keys;\n    },\n    hardwareConcurrencyKey: function hardwareConcurrencyKey(keys) {\n      return this.options.excludeHardwareConcurrency || keys.addPreprocessedComponent({\n        key: "hardware_concurrency",\n        value: this.getHardwareConcurrency()\n      }), keys;\n    },\n    hasSessionStorage: function hasSessionStorage() {\n      try {\n        return !!window.sessionStorage;\n      } catch (e) {\n        return !0;\n      }\n    },\n    hasLocalStorage: function hasLocalStorage() {\n      try {\n        return !!window.localStorage;\n      } catch (e) {\n        return !0;\n      }\n    },\n    hasIndexedDB: function hasIndexedDB() {\n      try {\n        return !!window.indexedDB;\n      } catch (e) {\n        return !0;\n      }\n    },\n    getHardwareConcurrency: function getHardwareConcurrency() {\n      return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown";\n    },\n    getNavigatorCpuClass: function getNavigatorCpuClass() {\n      return navigator.cpuClass ? navigator.cpuClass : "unknown";\n    },\n    getNavigatorPlatform: function getNavigatorPlatform() {\n      return navigator.platform ? navigator.platform : "unknown";\n    },\n    getDoNotTrack: function getDoNotTrack() {\n      return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown";\n    },\n    getTouchSupport: function getTouchSupport() {\n      var maxTouchPoints = 0,\n          touchEvent = !1;\n      void 0 !== navigator.maxTouchPoints ? maxTouchPoints = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (maxTouchPoints = navigator.msMaxTouchPoints);\n\n      try {\n        document.createEvent("TouchEvent"), touchEvent = !0;\n      } catch (_) {}\n\n      return [maxTouchPoints, touchEvent, "ontouchstart" in window];\n    },\n    getCanvasFp: function getCanvasFp() {\n      var result = [],\n          canvas = document.createElement("canvas");\n      canvas.width = 2e3, canvas.height = 200, canvas.style.display = "inline";\n      var ctx = canvas.getContext("2d");\n      return ctx.rect(0, 0, 10, 10), ctx.rect(2, 2, 6, 6), result.push("canvas winding:" + (!1 === ctx.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), ctx.textBaseline = "alphabetic", ctx.fillStyle = "#f60", ctx.fillRect(125, 1, 62, 20), ctx.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? ctx.font = "11pt Arial" : ctx.font = "11pt no-real-font-123", ctx.fillText("Cwm fjordbank glyphs vext quiz, Ã°Å¸ËœÆ’", 2, 15), ctx.fillStyle = "rgba(102, 204, 0, 0.2)", ctx.font = "18pt Arial", ctx.fillText("Cwm fjordbank glyphs vext quiz, Ã°Å¸ËœÆ’", 4, 45), ctx.globalCompositeOperation = "multiply", ctx.fillStyle = "rgb(255,0,255)", ctx.beginPath(), ctx.arc(50, 50, 50, 0, 2 * Math.PI, !0), ctx.closePath(), ctx.fill(), ctx.fillStyle = "rgb(0,255,255)", ctx.beginPath(), ctx.arc(100, 50, 50, 0, 2 * Math.PI, !0), ctx.closePath(), ctx.fill(), ctx.fillStyle = "rgb(255,255,0)", ctx.beginPath(), ctx.arc(75, 100, 50, 0, 2 * Math.PI, !0), ctx.closePath(), ctx.fill(), ctx.fillStyle = "rgb(255,0,255)", ctx.arc(75, 75, 75, 0, 2 * Math.PI, !0), ctx.arc(75, 75, 25, 0, 2 * Math.PI, !0), ctx.fill("evenodd"), canvas.toDataURL && result.push("canvas fp:" + canvas.toDataURL()), result.join("~");\n    },\n    getWebglFp: function getWebglFp() {\n      var gl,\n          fa2s = function fa2s(fa) {\n        return gl.clearColor(0, 0, 0, 1), gl.enable(gl.DEPTH_TEST), gl.depthFunc(gl.LEQUAL), gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT), "[" + fa[0] + ", " + fa[1] + "]";\n      },\n          maxAnisotropy = function maxAnisotropy(gl) {\n        var ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");\n\n        if (ext) {\n          var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);\n          return 0 === anisotropy && (anisotropy = 2), anisotropy;\n        }\n\n        return null;\n      };\n\n      if (!(gl = this.getWebglCanvas())) return null;\n      var result = [],\n          vShaderTemplate = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",\n          fShaderTemplate = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",\n          vertexPosBuffer = gl.createBuffer();\n      gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);\n      var vertices = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);\n      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW), vertexPosBuffer.itemSize = 3, vertexPosBuffer.numItems = 3;\n      var program = gl.createProgram(),\n          vshader = gl.createShader(gl.VERTEX_SHADER);\n      gl.shaderSource(vshader, vShaderTemplate), gl.compileShader(vshader);\n      var fshader = gl.createShader(gl.FRAGMENT_SHADER);\n      gl.shaderSource(fshader, fShaderTemplate), gl.compileShader(fshader), gl.attachShader(program, vshader), gl.attachShader(program, fshader), gl.linkProgram(program), gl.useProgram(program), program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex"), program.offsetUniform = gl.getUniformLocation(program, "uniformOffset"), gl.enableVertexAttribArray(program.vertexPosArray), gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0), gl.uniform2f(program.offsetUniform, 1, 1), gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);\n\n      try {\n        result.push(gl.canvas.toDataURL());\n      } catch (e) {}\n\n      result.push("extensions:" + (gl.getSupportedExtensions() || []).join(";")), result.push("webgl aliased line width range:" + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE))), result.push("webgl aliased point size range:" + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE))), result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS)), result.push("webgl antialiasing:" + (gl.getContextAttributes().antialias ? "yes" : "no")), result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS)), result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS)), result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS)), result.push("webgl max anisotropy:" + maxAnisotropy(gl)), result.push("webgl max combined texture image units:" + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), result.push("webgl max cube map texture size:" + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE)), result.push("webgl max fragment uniform vectors:" + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS)), result.push("webgl max render buffer size:" + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)), result.push("webgl max texture image units:" + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS)), result.push("webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE)), result.push("webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS)), result.push("webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS)), result.push("webgl max vertex texture image units:" + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), result.push("webgl max vertex uniform vectors:" + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS)), result.push("webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS))), result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS)), result.push("webgl renderer:" + gl.getParameter(gl.RENDERER)), result.push("webgl shading language version:" + gl.getParameter(gl.SHADING_LANGUAGE_VERSION)), result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS)), result.push("webgl vendor:" + gl.getParameter(gl.VENDOR)), result.push("webgl version:" + gl.getParameter(gl.VERSION));\n\n      try {\n        var extensionDebugRendererInfo = gl.getExtension("WEBGL_debug_renderer_info");\n        extensionDebugRendererInfo && (result.push("webgl unmasked vendor:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL)), result.push("webgl unmasked renderer:" + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)));\n      } catch (e) {}\n\n      return gl.getShaderPrecisionFormat ? (result.push("webgl vertex shader high float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision), result.push("webgl vertex shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMin), result.push("webgl vertex shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMax), result.push("webgl vertex shader medium float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision), result.push("webgl vertex shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin), result.push("webgl vertex shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax), result.push("webgl vertex shader low float precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).precision), result.push("webgl vertex shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMin), result.push("webgl vertex shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMax), result.push("webgl fragment shader high float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision), result.push("webgl fragment shader high float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMin), result.push("webgl fragment shader high float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMax), result.push("webgl fragment shader medium float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision), result.push("webgl fragment shader medium float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMin), result.push("webgl fragment shader medium float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMax), result.push("webgl fragment shader low float precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).precision), result.push("webgl fragment shader low float precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMin), result.push("webgl fragment shader low float precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMax), result.push("webgl vertex shader high int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).precision), result.push("webgl vertex shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).rangeMin), result.push("webgl vertex shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).rangeMax), result.push("webgl vertex shader medium int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).precision), result.push("webgl vertex shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).rangeMin), result.push("webgl vertex shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).rangeMax), result.push("webgl vertex shader low int precision:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).precision), result.push("webgl vertex shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).rangeMin), result.push("webgl vertex shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).rangeMax), result.push("webgl fragment shader high int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).precision), result.push("webgl fragment shader high int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).rangeMin), result.push("webgl fragment shader high int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).rangeMax), result.push("webgl fragment shader medium int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).precision), result.push("webgl fragment shader medium int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).rangeMin), result.push("webgl fragment shader medium int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).rangeMax), result.push("webgl fragment shader low int precision:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).precision), result.push("webgl fragment shader low int precision rangeMin:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMin), result.push("webgl fragment shader low int precision rangeMax:" + gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMax), result.join("~")) : result.join("~");\n    },\n    getWebglVendorAndRenderer: function getWebglVendorAndRenderer() {\n      try {\n        var glContext = this.getWebglCanvas(),\n            extensionDebugRendererInfo = glContext.getExtension("WEBGL_debug_renderer_info");\n        return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + "~" + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);\n      } catch (e) {\n        return null;\n      }\n    },\n    getAdBlock: function getAdBlock() {\n      var ads = document.createElement("div");\n      ads.innerHTML = "&nbsp;", ads.className = "adsbox";\n      var result = !1;\n\n      try {\n        document.body.appendChild(ads), result = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(ads);\n      } catch (e) {\n        result = !1;\n      }\n\n      return result;\n    },\n    getHasLiedLanguages: function getHasLiedLanguages() {\n      if (void 0 !== navigator.languages) try {\n        if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0;\n      } catch (err) {\n        return !0;\n      }\n      return !1;\n    },\n    getHasLiedResolution: function getHasLiedResolution() {\n      return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;\n    },\n    getHasLiedOs: function getHasLiedOs() {\n      var os,\n          userAgent = navigator.userAgent.toLowerCase(),\n          oscpu = navigator.oscpu,\n          platform = navigator.platform.toLowerCase();\n      os = userAgent.indexOf("windows phone") >= 0 ? "Windows Phone" : userAgent.indexOf("win") >= 0 ? "Windows" : userAgent.indexOf("android") >= 0 ? "Android" : userAgent.indexOf("linux") >= 0 ? "Linux" : userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 ? "iOS" : userAgent.indexOf("mac") >= 0 ? "Mac" : "Other";\n      if (("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== os && "Android" !== os && "iOS" !== os && "Other" !== os) return !0;\n\n      if (void 0 !== oscpu) {\n        if (oscpu = oscpu.toLowerCase(), oscpu.indexOf("win") >= 0 && "Windows" !== os && "Windows Phone" !== os) return !0;\n        if (oscpu.indexOf("linux") >= 0 && "Linux" !== os && "Android" !== os) return !0;\n        if (oscpu.indexOf("mac") >= 0 && "Mac" !== os && "iOS" !== os) return !0;\n        if ((-1 === oscpu.indexOf("win") && -1 === oscpu.indexOf("linux") && -1 === oscpu.indexOf("mac")) != ("Other" === os)) return !0;\n      }\n\n      return platform.indexOf("win") >= 0 && "Windows" !== os && "Windows Phone" !== os || (platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && "Linux" !== os && "Android" !== os || (platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && "Mac" !== os && "iOS" !== os || (-1 === platform.indexOf("win") && -1 === platform.indexOf("linux") && -1 === platform.indexOf("mac")) != ("Other" === os) || void 0 === navigator.plugins && "Windows" !== os && "Windows Phone" !== os;\n    },\n    getHasLiedBrowser: function getHasLiedBrowser() {\n      var browser,\n          userAgent = navigator.userAgent.toLowerCase(),\n          productSub = navigator.productSub;\n      if (("Chrome" === (browser = userAgent.indexOf("firefox") >= 0 ? "Firefox" : userAgent.indexOf("opera") >= 0 || userAgent.indexOf("opr") >= 0 ? "Opera" : userAgent.indexOf("chrome") >= 0 ? "Chrome" : userAgent.indexOf("safari") >= 0 ? "Safari" : userAgent.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === browser || "Opera" === browser) && "20030107" !== productSub) return !0;\n      var tempRes = eval.toString().length;\n      if (37 === tempRes && "Safari" !== browser && "Firefox" !== browser && "Other" !== browser) return !0;\n      if (39 === tempRes && "Internet Explorer" !== browser && "Other" !== browser) return !0;\n      if (33 === tempRes && "Chrome" !== browser && "Opera" !== browser && "Other" !== browser) return !0;\n      var errFirefox;\n\n      try {\n        throw "a";\n      } catch (err) {\n        try {\n          err.toSource(), errFirefox = !0;\n        } catch (errOfErr) {\n          errFirefox = !1;\n        }\n      }\n\n      return !(!errFirefox || "Firefox" === browser || "Other" === browser);\n    },\n    isCanvasSupported: function isCanvasSupported() {\n      var elem = document.createElement("canvas");\n      return !(!elem.getContext || !elem.getContext("2d"));\n    },\n    isWebGlSupported: function isWebGlSupported() {\n      if (!this.isCanvasSupported()) return !1;\n      var glContext = this.getWebglCanvas();\n      return !!window.WebGLRenderingContext && !!glContext;\n    },\n    isIE: function isIE() {\n      return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));\n    },\n    hasSwfObjectLoaded: function hasSwfObjectLoaded() {\n      return void 0 !== window.swfobject;\n    },\n    hasMinFlashInstalled: function hasMinFlashInstalled() {\n      return window.swfobject.hasFlashPlayerVersion("9.0.0");\n    },\n    addFlashDivNode: function addFlashDivNode() {\n      var node = document.createElement("div");\n      node.setAttribute("id", this.options.swfContainerId), document.body.appendChild(node);\n    },\n    loadSwfAndDetectFonts: function loadSwfAndDetectFonts(done) {\n      var hiddenCallback = "___fp_swf_loaded";\n\n      window[hiddenCallback] = function (fonts) {\n        done(fonts);\n      };\n\n      var id = this.options.swfContainerId;\n      this.addFlashDivNode();\n      var flashvars = {\n        onReady: hiddenCallback\n      },\n          flashparams = {\n        allowScriptAccess: "always",\n        menu: "false"\n      };\n      window.swfobject.embedSWF(this.options.swfPath, id, "1", "1", "9.0.0", !1, flashvars, flashparams, {});\n    },\n    getWebglCanvas: function getWebglCanvas() {\n      var canvas = document.createElement("canvas"),\n          gl = null;\n\n      try {\n        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");\n      } catch (e) {}\n\n      return gl || (gl = null), gl;\n    },\n    each: function each(obj, iterator, context) {\n      if (null !== obj) if (this.nativeForEach && obj.forEach === this.nativeForEach) obj.forEach(iterator, context);else if (obj.length === +obj.length) {\n        for (var i = 0, l = obj.length; i < l; i++) {\n          if (iterator.call(context, obj[i], i, obj) === {}) return;\n        }\n      } else for (var key in obj) {\n        if (obj.hasOwnProperty(key) && iterator.call(context, obj[key], key, obj) === {}) return;\n      }\n    },\n    map: function map(obj, iterator, context) {\n      var results = [];\n      return null == obj ? results : this.nativeMap && obj.map === this.nativeMap ? obj.map(iterator, context) : (this.each(obj, function (value, index, list) {\n        results[results.length] = iterator.call(context, value, index, list);\n      }), results);\n    },\n    x64Add: function x64Add(m, n) {\n      m = [m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];\n      var o = [0, 0, 0, 0];\n      return o[3] += m[3] + n[3], o[2] += o[3] >>> 16, o[3] &= 65535, o[2] += m[2] + n[2], o[1] += o[2] >>> 16, o[2] &= 65535, o[1] += m[1] + n[1], o[0] += o[1] >>> 16, o[1] &= 65535, o[0] += m[0] + n[0], o[0] &= 65535, [o[0] << 16 | o[1], o[2] << 16 | o[3]];\n    },\n    x64Multiply: function x64Multiply(m, n) {\n      m = [m[0] >>> 16, 65535 & m[0], m[1] >>> 16, 65535 & m[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];\n      var o = [0, 0, 0, 0];\n      return o[3] += m[3] * n[3], o[2] += o[3] >>> 16, o[3] &= 65535, o[2] += m[2] * n[3], o[1] += o[2] >>> 16, o[2] &= 65535, o[2] += m[3] * n[2], o[1] += o[2] >>> 16, o[2] &= 65535, o[1] += m[1] * n[3], o[0] += o[1] >>> 16, o[1] &= 65535, o[1] += m[2] * n[2], o[0] += o[1] >>> 16, o[1] &= 65535, o[1] += m[3] * n[1], o[0] += o[1] >>> 16, o[1] &= 65535, o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0], o[0] &= 65535, [o[0] << 16 | o[1], o[2] << 16 | o[3]];\n    },\n    x64Rotl: function x64Rotl(m, n) {\n      return n %= 64, 32 === n ? [m[1], m[0]] : n < 32 ? [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n] : (n -= 32, [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n]);\n    },\n    x64LeftShift: function x64LeftShift(m, n) {\n      return n %= 64, 0 === n ? m : n < 32 ? [m[0] << n | m[1] >>> 32 - n, m[1] << n] : [m[1] << n - 32, 0];\n    },\n    x64Xor: function x64Xor(m, n) {\n      return [m[0] ^ n[0], m[1] ^ n[1]];\n    },\n    x64Fmix: function x64Fmix(h) {\n      return h = this.x64Xor(h, [0, h[0] >>> 1]), h = this.x64Multiply(h, [4283543511, 3981806797]), h = this.x64Xor(h, [0, h[0] >>> 1]), h = this.x64Multiply(h, [3301882366, 444984403]), h = this.x64Xor(h, [0, h[0] >>> 1]);\n    },\n    x64hash128: function x64hash128(key, seed) {\n      key = key || "", seed = seed || 0;\n\n      for (var remainder = key.length % 16, bytes = key.length - remainder, h1 = [0, seed], h2 = [0, seed], k1 = [0, 0], k2 = [0, 0], c1 = [2277735313, 289559509], c2 = [1291169091, 658871167], i = 0; i < bytes; i += 16) {\n        k1 = [255 & key.charCodeAt(i + 4) | (255 & key.charCodeAt(i + 5)) << 8 | (255 & key.charCodeAt(i + 6)) << 16 | (255 & key.charCodeAt(i + 7)) << 24, 255 & key.charCodeAt(i) | (255 & key.charCodeAt(i + 1)) << 8 | (255 & key.charCodeAt(i + 2)) << 16 | (255 & key.charCodeAt(i + 3)) << 24], k2 = [255 & key.charCodeAt(i + 12) | (255 & key.charCodeAt(i + 13)) << 8 | (255 & key.charCodeAt(i + 14)) << 16 | (255 & key.charCodeAt(i + 15)) << 24, 255 & key.charCodeAt(i + 8) | (255 & key.charCodeAt(i + 9)) << 8 | (255 & key.charCodeAt(i + 10)) << 16 | (255 & key.charCodeAt(i + 11)) << 24], k1 = this.x64Multiply(k1, c1), k1 = this.x64Rotl(k1, 31), k1 = this.x64Multiply(k1, c2), h1 = this.x64Xor(h1, k1), h1 = this.x64Rotl(h1, 27), h1 = this.x64Add(h1, h2), h1 = this.x64Add(this.x64Multiply(h1, [0, 5]), [0, 1390208809]), k2 = this.x64Multiply(k2, c2), k2 = this.x64Rotl(k2, 33), k2 = this.x64Multiply(k2, c1), h2 = this.x64Xor(h2, k2), h2 = this.x64Rotl(h2, 31), h2 = this.x64Add(h2, h1), h2 = this.x64Add(this.x64Multiply(h2, [0, 5]), [0, 944331445]);\n      }\n\n      switch (k1 = [0, 0], k2 = [0, 0], remainder) {\n        case 15:\n          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 14)], 48));\n\n        case 14:\n          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 13)], 40));\n\n        case 13:\n          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 12)], 32));\n\n        case 12:\n          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 11)], 24));\n\n        case 11:\n          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 10)], 16));\n\n        case 10:\n          k2 = this.x64Xor(k2, this.x64LeftShift([0, key.charCodeAt(i + 9)], 8));\n\n        case 9:\n          k2 = this.x64Xor(k2, [0, key.charCodeAt(i + 8)]), k2 = this.x64Multiply(k2, c2), k2 = this.x64Rotl(k2, 33), k2 = this.x64Multiply(k2, c1), h2 = this.x64Xor(h2, k2);\n\n        case 8:\n          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 7)], 56));\n\n        case 7:\n          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 6)], 48));\n\n        case 6:\n          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 5)], 40));\n\n        case 5:\n          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 4)], 32));\n\n        case 4:\n          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 3)], 24));\n\n        case 3:\n          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 2)], 16));\n\n        case 2:\n          k1 = this.x64Xor(k1, this.x64LeftShift([0, key.charCodeAt(i + 1)], 8));\n\n        case 1:\n          k1 = this.x64Xor(k1, [0, key.charCodeAt(i)]), k1 = this.x64Multiply(k1, c1), k1 = this.x64Rotl(k1, 31), k1 = this.x64Multiply(k1, c2), h1 = this.x64Xor(h1, k1);\n      }\n\n      return h1 = this.x64Xor(h1, [0, key.length]), h2 = this.x64Xor(h2, [0, key.length]), h1 = this.x64Add(h1, h2), h2 = this.x64Add(h2, h1), h1 = this.x64Fmix(h1), h2 = this.x64Fmix(h2), h1 = this.x64Add(h1, h2), h2 = this.x64Add(h2, h1), ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);\n    }\n  }, Fingerprint2.VERSION = "1.5.1", Fingerprint2;\n});\nvar TelemetrySyncManager = {\n  _teleData: [],\n  init: function init() {\n    document.addEventListener("TelemetryEvent", this.sendTelemetry);\n  },\n  sendTelemetry: function sendTelemetry(event) {\n    var telemetryEvent = event.detail;\n    var instance = TelemetrySyncManager;\n    instance._teleData.push(Object.assign({}, telemetryEvent)), ("END" === telemetryEvent.eid.toUpperCase() || instance._teleData.length >= Telemetry.config.batchsize) && TelemetrySyncManager.syncEvents();\n  },\n  updateEventStack: function updateEventStack(events) {\n    TelemetrySyncManager._teleData = TelemetrySyncManager._teleData.concat(events);\n  },\n  syncEvents: function syncEvents() {\n    var Telemetry = EkTelemetry || Telemetry,\n        instance = TelemetrySyncManager,\n        telemetryData = instance._teleData.splice(0, Telemetry.config.batchsize),\n        telemetryObj = {\n      id: "ekstep.telemetry",\n      ver: Telemetry._version,\n      ets: new Date().getTime(),\n      events: telemetryData\n    },\n        headersParam = {};\n\n    void 0 !== Telemetry.config.authtoken && (headersParam.Authorization = "Bearer " + Telemetry.config.authtoken);\n    var fullPath = Telemetry.config.host + Telemetry.config.apislug + Telemetry.config.endpoint;\n    headersParam.dataType = "json", headersParam["Content-Type"] = "application/json", jQuery.ajax({\n      url: fullPath,\n      type: "POST",\n      headers: headersParam,\n      data: JSON.stringify(telemetryObj)\n    }).done(function (resp) {}).fail(function (error, textStatus, errorThrown) {\n      instance.updateEventStack(telemetryData);\n    });\n  }\n};\nif ("undefined" != typeof document && TelemetrySyncManager.init(), "undefined" == typeof document) var Ajv = require("ajv");\n\nvar libraryDispatcher = {\n  dispatch: function dispatch(event) {\n    "undefined" != typeof document ? document.dispatchEvent(new CustomEvent("TelemetryEvent", {\n      detail: event\n    })) : null;\n  }\n},\n    EkTelemetry = function () {\n  this.ektelemetry = function () {};\n\n  var instance = function instance() {},\n      telemetryInstance = this;\n\n  return this.ektelemetry.initialized = !1, this.ektelemetry.config = {}, this.ektelemetry._version = "3.0", this.ektelemetry.fingerPrintId = void 0, this.dispatcher = libraryDispatcher, this._defaultValue = {\n    uid: "anonymous",\n    authtoken: "",\n    batchsize: 20,\n    host: "https://api.ekstep.in",\n    endpoint: "/data/v3/telemetry",\n    apislug: "/action"\n  }, this.telemetryEnvelop = {\n    eid: "",\n    ets: "",\n    ver: "",\n    mid: "",\n    actor: {},\n    context: {},\n    object: {},\n    tags: [],\n    edata: ""\n  }, this._globalContext = {\n    channel: "in.ekstep",\n    pdata: {\n      id: "in.ekstep",\n      ver: "1.0",\n      pid: ""\n    },\n    env: "contentplayer",\n    sid: "",\n    did: "",\n    cdata: [],\n    rollup: {}\n  }, this.runningEnv = "client", this.enableValidation = !1, this._globalObject = {}, this.startData = [], this.ajv = new Ajv({\n    schemas: telemetrySchema\n  }), this.ektelemetry.initialize = function (config) {\n    instance.init(config);\n  }, this.ektelemetry.start = function (config, contentId, contentVer, data, options) {\n    data.duration = data.duration || new Date().getTime(), contentId && contentVer && (telemetryInstance._globalObject.id = contentId, telemetryInstance._globalObject.ver = contentVer), !EkTelemetry.initialized && config && instance.init(config, contentId, contentVer), instance.updateValues(options);\n    var startEventObj = instance.getEvent("START", data);\n    instance._dispatch(startEventObj), telemetryInstance.startData.push(JSON.parse(JSON.stringify(startEventObj)));\n  }, this.ektelemetry.impression = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("IMPRESSION", data));\n  }, this.ektelemetry.interact = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("INTERACT", data));\n  }, this.ektelemetry.assess = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("ASSESS", data));\n  }, this.ektelemetry.response = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("RESPONSE", data));\n  }, this.ektelemetry.interrupt = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("INTERRUPT", data));\n  }, this.ektelemetry.feedback = function (data, options) {\n    var eksData = {\n      rating: data.rating,\n      comments: data.comments || ""\n    };\n    instance.updateValues(options), instance._dispatch(instance.getEvent("FEEDBACK", eksData));\n  }, this.ektelemetry.share = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("SHARE", data));\n  }, this.ektelemetry.audit = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("AUDIT", data));\n  }, this.ektelemetry.error = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("ERROR", data));\n  }, this.ektelemetry.heartbeat = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("HEARTBEAT", data));\n  }, this.ektelemetry.log = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("LOG", data));\n  }, this.ektelemetry.search = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("SEARCH", data));\n  }, this.ektelemetry.metrics = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("METRICS", data));\n  }, this.ektelemetry.exdata = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("EXDATA", data));\n  }, this.ektelemetry.summary = function (data, options) {\n    instance.updateValues(options), instance._dispatch(instance.getEvent("SUMMARY", data));\n  }, this.ektelemetry.end = function (data, options) {\n    if (telemetryInstance.startData.length) {\n      var startEventObj = telemetryInstance.startData.pop();\n      data.duration = new Date().getTime() - startEventObj.ets, instance.updateValues(options), instance._dispatch(instance.getEvent("END", data));\n    }\n  }, this.ektelemetry.isInitialized = function () {\n    return EkTelemetry.initialized;\n  }, this.ektelemetry.resetContext = function (context) {\n    telemetryInstance._currentContext = context || {};\n  }, this.ektelemetry.resetObject = function (object) {\n    telemetryInstance._currentObject = object || {};\n  }, this.ektelemetry.resetActor = function (actor) {\n    telemetryInstance._currentActor = actor || {};\n  }, this.ektelemetry.resetTags = function (tags) {\n    telemetryInstance._currentTags = tags || [];\n  }, this.ektelemetry.syncEvents = function () {\n    void 0 !== TelemetrySyncManager && TelemetrySyncManager.syncEvents();\n  }, instance.init = function (config, contentId, contentVer) {\n    if (EkTelemetry.initialized) return void null;\n    !config && (config = {}), contentId && (telemetryInstance._globalObject.id = contentId), contentVer && (telemetryInstance._globalObject.ver = contentVer), config.runningEnv && (telemetryInstance.runningEnv = config.runningEnv), void 0 !== config.enableValidation && (telemetryInstance.enableValidation = config.enableValidation), config.batchsize = config.batchsize ? config.batchsize < 10 ? 10 : config.batchsize > 1e3 ? 1e3 : config.batchsize : _defaultValue.batchsize, EkTelemetry.config = Object.assign(_defaultValue, config), EkTelemetry.initialized = !0, telemetryInstance.dispatcher = EkTelemetry.config.dispatcher ? EkTelemetry.config.dispatcher : libraryDispatcher, instance.updateConfigurations(config);\n  }, instance._dispatch = function (message) {\n    if (message.mid = message.eid + ":" + CryptoJS.MD5(JSON.stringify(message)).toString(), telemetryInstance.enableValidation) {\n      var validate = ajv.getSchema("http://api.ekstep.org/telemetry/" + message.eid.toLowerCase());\n      if (!validate(message)) return void null;\n    }\n\n    "client" === telemetryInstance.runningEnv ? message.context.did ? dispatcher.dispatch(message) : EkTelemetry.fingerPrintId ? (message.context.did = EkTelemetry.fingerPrintId, dispatcher.dispatch(message)) : EkTelemetry.getFingerPrint(function (result, components) {\n      message.context.did = result, EkTelemetry.fingerPrintId = result, dispatcher.dispatch(message);\n    }) : dispatcher.dispatch(message);\n  }, instance.getEvent = function (eventId, data) {\n    return telemetryInstance.telemetryEnvelop.eid = eventId, telemetryInstance.telemetryEnvelop.ets = new Date().getTime(), telemetryInstance.telemetryEnvelop.ver = EkTelemetry._version, telemetryInstance.telemetryEnvelop.mid = "", telemetryInstance.telemetryEnvelop.actor = Object.assign({}, {\n      id: EkTelemetry.config.uid || "anonymous",\n      type: "User"\n    }, instance.getUpdatedValue("actor")), telemetryInstance.telemetryEnvelop.context = Object.assign({}, instance.getGlobalContext(), instance.getUpdatedValue("context")), telemetryInstance.telemetryEnvelop.object = Object.assign({}, instance.getGlobalObject(), instance.getUpdatedValue("object")), telemetryInstance.telemetryEnvelop.tags = Object.assign([], EkTelemetry.config.tags, instance.getUpdatedValue("tags")), telemetryInstance.telemetryEnvelop.edata = data, telemetryInstance.telemetryEnvelop;\n  }, instance.updateConfigurations = function (config) {\n    config.object && (telemetryInstance._globalObject = config.object), config.channel && (telemetryInstance._globalContext.channel = config.channel), config.env && (telemetryInstance._globalContext.env = config.env), config.rollup && (telemetryInstance._globalContext.rollup = config.rollup), config.sid && (telemetryInstance._globalContext.sid = config.sid), config.did && (telemetryInstance._globalContext.did = config.did), config.cdata && (telemetryInstance._globalContext.cdata = config.cdata), config.pdata && (telemetryInstance._globalContext.pdata = config.pdata);\n  }, instance.getGlobalContext = function () {\n    return telemetryInstance._globalContext;\n  }, instance.getGlobalObject = function () {\n    return telemetryInstance._globalObject;\n  }, instance.updateValues = function (options) {\n    options && (options.context && (telemetryInstance._currentContext = options.context), options.object && (telemetryInstance._currentObject = options.object), options.actor && (telemetryInstance._currentActor = options.actor), options.tags && (telemetryInstance._currentTags = options.tags), options.runningEnv && (telemetryInstance.runningEnv = options.runningEnv));\n  }, instance.getUpdatedValue = function (key) {\n    switch (key.toLowerCase()) {\n      case "context":\n        return telemetryInstance._currentContext || {};\n\n      case "object":\n        return telemetryInstance._currentObject || {};\n\n      case "actor":\n        return telemetryInstance._currentActor || {};\n\n      case "tags":\n        return telemetryInstance._currentTags || [];\n    }\n  }, instance.objectAssign = function () {\n    Object.assign = function (target) {\n      "use strict";\n\n      if (null == target) throw new TypeError("Cannot convert undefined or null to object");\n      target = Object(target);\n\n      for (var index = 1; index < arguments.length; index++) {\n        var source = arguments[index];\n        if (null != source) for (var key in source) {\n          Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);\n        }\n      }\n\n      return target;\n    };\n  }, this.ektelemetry.getFingerPrint = function (cb) {\n    new Fingerprint2().get(function (result, components) {\n      cb && cb(result, components);\n    });\n  }, "function" != typeof Object.assign && instance.objectAssign(), this.ektelemetry;\n}();\n\nTelemetry = $t = EkTelemetry, "undefined" != typeof module && (module.exports = Telemetry);'
}, function(e, t, n) {
    var r;
    /*!
     * UAParser.js v0.7.19
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright Â© 2012-2016 Faisal Salman <fyzlman@gmail.com>
     * Dual licensed under GPLv2 or MIT
     */
    /*!
     * UAParser.js v0.7.19
     * Lightweight JavaScript-based User-Agent string parser
     * https://github.com/faisalman/ua-parser-js
     *
     * Copyright Â© 2012-2016 Faisal Salman <fyzlman@gmail.com>
     * Dual licensed under GPLv2 or MIT
     */
    ! function(a, i) {
        "use strict";
        var o = "model",
            s = "name",
            l = "type",
            u = "vendor",
            c = "version",
            d = "mobile",
            p = "tablet",
            h = {
                extend: function(e, t) {
                    var n = {};
                    for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                    return n
                },
                has: function(e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            f = {
                rgx: function(e, t) {
                    for (var n, r, a, i, o, s, l = 0; l < t.length && !o;) {
                        var u = t[l],
                            c = t[l + 1];
                        for (n = r = 0; n < u.length && !o;)
                            if (o = u[n++].exec(e))
                                for (a = 0; a < c.length; a++) s = o[++r], "object" == typeof(i = c[a]) && i.length > 0 ? 2 == i.length ? "function" == typeof i[1] ? this[i[0]] = i[1].call(this, s) : this[i[0]] = i[1] : 3 == i.length ? "function" != typeof i[1] || i[1].exec && i[1].test ? this[i[0]] = s ? s.replace(i[1], i[2]) : void 0 : this[i[0]] = s ? i[1].call(this, s, i[2]) : void 0 : 4 == i.length && (this[i[0]] = s ? i[3].call(this, s.replace(i[1], i[2])) : void 0) : this[i] = s || void 0;
                        l += 2
                    }
                },
                str: function(e, t) {
                    for (var n in t)
                        if ("object" == typeof t[n] && t[n].length > 0) {
                            for (var r = 0; r < t[n].length; r++)
                                if (h.has(t[n][r], e)) return "?" === n ? void 0 : n
                        } else if (h.has(t[n], e)) return "?" === n ? void 0 : n;
                    return e
                }
            },
            m = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            g = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [s, c],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [s, "Opera Mini"], c
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [s, "Opera"], c
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                    [s, c],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [s, "IE"], c
                    ],
                    [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
                    [
                        [s, "Edge"], c
                    ],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [s, "Yandex"], c
                    ],
                    [/(puffin)\/([\w\.]+)/i],
                    [
                        [s, "Puffin"], c
                    ],
                    [/(focus)\/([\w\.]+)/i],
                    [
                        [s, "Firefox Focus"], c
                    ],
                    [/(opt)\/([\w\.]+)/i],
                    [
                        [s, "Opera Touch"], c
                    ],
                    [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [s, "UCBrowser"], c
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [s, /_/g, " "], c
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [s, "WeChat"], c
                    ],
                    [/(brave)\/([\w\.]+)/i],
                    [
                        [s, "Brave"], c
                    ],
                    [/(qqbrowserlite)\/([\w\.]+)/i],
                    [s, c],
                    [/(QQ)\/([\d\.]+)/i],
                    [s, c],
                    [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [s, c],
                    [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                    [s, c],
                    [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                    [s, c],
                    [/(MetaSr)[\/\s]?([\w\.]+)/i],
                    [s],
                    [/(LBBROWSER)/i],
                    [s],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [c, [s, "MIUI Browser"]],
                    [/;fbav\/([\w\.]+);/i],
                    [c, [s, "Facebook"]],
                    [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                    [s, c],
                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                    [c, [s, "Chrome Headless"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [s, /(.+)/, "$1 WebView"], c
                    ],
                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                    [
                        [s, /(.+(?:g|us))(.+)/, "$1 $2"], c
                    ],
                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [c, [s, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                    [s, c],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [s, "Dolphin"], c
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [s, "Chrome"], c
                    ],
                    [/(coast)\/([\w\.]+)/i],
                    [
                        [s, "Opera Coast"], c
                    ],
                    [/fxios\/([\w\.-]+)/i],
                    [c, [s, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [c, [s, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [c, s],
                    [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [
                        [s, "GSA"], c
                    ],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [s, [c, f.str, m.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [s, c],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [s, "Netscape"], c
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [s, c]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        ["architecture", "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        ["architecture", h.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        ["architecture", "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        ["architecture", "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        ["architecture", /ower/, "", h.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        ["architecture", "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        ["architecture", h.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [o, u, [l, p]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [o, [u, "Apple"],
                        [l, p]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [o, "Apple TV"],
                        [u, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [u, o, [l, p]],
                    [/(kf[A-z]+)\sbuild\/.+silk\//i],
                    [o, [u, "Amazon"],
                        [l, p]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                    [
                        [o, f.str, m.device.amazon.model],
                        [u, "Amazon"],
                        [l, d]
                    ],
                    [/android.+aft([bms])\sbuild/i],
                    [o, [u, "Amazon"],
                        [l, "smarttv"]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [o, u, [l, d]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [o, [u, "Apple"],
                        [l, d]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [u, o, [l, d]],
                    [/\(bb10;\s(\w+)/i],
                    [o, [u, "BlackBerry"],
                        [l, d]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [o, [u, "Asus"],
                        [l, p]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [u, "Sony"],
                        [o, "Xperia Tablet"],
                        [l, p]
                    ],
                    [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                    [o, [u, "Sony"],
                        [l, d]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [u, o, [l, "console"]],
                    [/android.+;\s(shield)\sbuild/i],
                    [o, [u, "Nvidia"],
                        [l, "console"]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [o, [u, "Sony"],
                        [l, "console"]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [u, f.str, m.device.sprint.vendor],
                        [o, f.str, m.device.sprint.model],
                        [l, d]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [u, o, [l, p]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                    [u, [o, /_/g, " "],
                        [l, d]
                    ],
                    [/(nexus\s9)/i],
                    [o, [u, "HTC"],
                        [l, p]
                    ],
                    [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                    [o, [u, "Huawei"],
                        [l, d]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [u, o, [l, d]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [o, [u, "Microsoft"],
                        [l, "console"]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [o, /\./g, " "],
                        [u, "Microsoft"],
                        [l, d]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [o, [u, "Motorola"],
                        [l, d]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [o, [u, "Motorola"],
                        [l, p]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [u, h.trim],
                        [o, h.trim],
                        [l, "smarttv"]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [o, /^/, "SmartTV"],
                        [u, "Samsung"],
                        [l, "smarttv"]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [o, [u, "Sharp"],
                        [l, "smarttv"]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [u, "Samsung"], o, [l, p]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [u, [l, "smarttv"], o],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                    [
                        [u, "Samsung"], o, [l, d]
                    ],
                    [/sie-(\w*)/i],
                    [o, [u, "Siemens"],
                        [l, d]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                    [
                        [u, "Nokia"], o, [l, d]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [o, [u, "Acer"],
                        [l, p]
                    ],
                    [/android.+([vl]k\-?\d{3})\s+build/i],
                    [o, [u, "LG"],
                        [l, p]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [u, "LG"], o, [l, p]
                    ],
                    [/(lg) netcast\.tv/i],
                    [u, o, [l, "smarttv"]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                    [o, [u, "LG"],
                        [l, d]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [o, [u, "Lenovo"],
                        [l, p]
                    ],
                    [/linux;.+((jolla));/i],
                    [u, o, [l, d]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [u, o, [l, "wearable"]],
                    [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                    [u, o, [l, d]],
                    [/crkey/i],
                    [
                        [o, "Chromecast"],
                        [u, "Google"]
                    ],
                    [/android.+;\s(glass)\s\d/i],
                    [o, [u, "Google"],
                        [l, "wearable"]
                    ],
                    [/android.+;\s(pixel c)[\s)]/i],
                    [o, [u, "Google"],
                        [l, p]
                    ],
                    [/android.+;\s(pixel( [23])?( xl)?)\s/i],
                    [o, [u, "Google"],
                        [l, d]
                    ],
                    [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [o, /_/g, " "],
                        [u, "Xiaomi"],
                        [l, d]
                    ],
                    [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [o, /_/g, " "],
                        [u, "Xiaomi"],
                        [l, p]
                    ],
                    [/android.+;\s(m[1-5]\snote)\sbuild/i],
                    [o, [u, "Meizu"],
                        [l, p]
                    ],
                    [/(mz)-([\w-]{2,})/i],
                    [
                        [u, "Meizu"], o, [l, d]
                    ],
                    [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                    [o, [u, "OnePlus"],
                        [l, d]
                    ],
                    [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                    [o, [u, "RCA"],
                        [l, p]
                    ],
                    [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                    [o, [u, "Dell"],
                        [l, p]
                    ],
                    [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                    [o, [u, "Verizon"],
                        [l, p]
                    ],
                    [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                    [
                        [u, "Barnes & Noble"], o, [l, p]
                    ],
                    [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                    [o, [u, "NuVision"],
                        [l, p]
                    ],
                    [/android.+;\s(k88)\sbuild/i],
                    [o, [u, "ZTE"],
                        [l, p]
                    ],
                    [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                    [o, [u, "Swiss"],
                        [l, d]
                    ],
                    [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                    [o, [u, "Swiss"],
                        [l, p]
                    ],
                    [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                    [o, [u, "Zeki"],
                        [l, p]
                    ],
                    [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                    [
                        [u, "Dragon Touch"], o, [l, p]
                    ],
                    [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                    [o, [u, "Insignia"],
                        [l, p]
                    ],
                    [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                    [o, [u, "NextBook"],
                        [l, p]
                    ],
                    [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                    [
                        [u, "Voice"], o, [l, d]
                    ],
                    [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                    [
                        [u, "LvTel"], o, [l, d]
                    ],
                    [/android.+;\s(PH-1)\s/i],
                    [o, [u, "Essential"],
                        [l, d]
                    ],
                    [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                    [o, [u, "Envizen"],
                        [l, p]
                    ],
                    [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                    [u, o, [l, p]],
                    [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                    [o, [u, "MachSpeed"],
                        [l, p]
                    ],
                    [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                    [u, o, [l, p]],
                    [/android.+[;\/]\s*TU_(1491)\s+build/i],
                    [o, [u, "Rotor"],
                        [l, p]
                    ],
                    [/android.+(KS(.+))\s+build/i],
                    [o, [u, "Amazon"],
                        [l, p]
                    ],
                    [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                    [u, o, [l, p]],
                    [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [l, h.lowerize], u, o
                    ],
                    [/(android[\w\.\s\-]{0,9});.+build/i],
                    [o, [u, "Generic"]]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [c, [s, "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [s, c],
                    [/rv\:([\w\.]{1,9}).+(gecko)/i],
                    [c, s]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [s, c],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [s, [c, f.str, m.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [s, "Windows"],
                        [c, f.str, m.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [s, "BlackBerry"], c
                    ],
                    [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                    [s, c],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                    [
                        [s, "Symbian"], c
                    ],
                    [/\((series40);/i],
                    [s],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [s, "Firefox OS"], c
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                    [s, c],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [s, "Chromium OS"], c
                    ],
                    [/(sunos)\s?([\w\.\d]*)/i],
                    [
                        [s, "Solaris"], c
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                    [s, c],
                    [/(haiku)\s(\w+)/i],
                    [s, c],
                    [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                    [
                        [c, /_/g, "."],
                        [s, "iOS"]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [s, "Mac OS"],
                        [c, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                    [s, c]
                ]
            },
            y = function(e, t) {
                if ("object" == typeof e && (t = e, e = void 0), !(this instanceof y)) return new y(e, t).getResult();
                var n = e || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : ""),
                    r = t ? h.extend(g, t) : g;
                return this.getBrowser = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return f.rgx.call(e, n, r.browser), e.major = h.major(e.version), e
                }, this.getCPU = function() {
                    var e = {
                        architecture: void 0
                    };
                    return f.rgx.call(e, n, r.cpu), e
                }, this.getDevice = function() {
                    var e = {
                        vendor: void 0,
                        model: void 0,
                        type: void 0
                    };
                    return f.rgx.call(e, n, r.device), e
                }, this.getEngine = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return f.rgx.call(e, n, r.engine), e
                }, this.getOS = function() {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return f.rgx.call(e, n, r.os), e
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return n
                }, this.setUA = function(e) {
                    return n = e, this
                }, this
            };
        y.VERSION = "0.7.19", y.BROWSER = {
            NAME: s,
            MAJOR: "major",
            VERSION: c
        }, y.CPU = {
            ARCHITECTURE: "architecture"
        }, y.DEVICE = {
            MODEL: o,
            VENDOR: u,
            TYPE: l,
            CONSOLE: "console",
            MOBILE: d,
            SMARTTV: "smarttv",
            TABLET: p,
            WEARABLE: "wearable",
            EMBEDDED: "embedded"
        }, y.ENGINE = {
            NAME: s,
            VERSION: c
        }, y.OS = {
            NAME: s,
            VERSION: c
        }, void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = y), t.UAParser = y) : n(8) ? void 0 === (r = function() {
            return y
        }.call(t, n, t, e)) || (e.exports = r) : a && (a.UAParser = y);
        var v = a && (a.jQuery || a.Zepto);
        if (void 0 !== v && !v.ua) {
            var b = new y;
            v.ua = b.getResult(), v.ua.get = function() {
                return b.getUA()
            }, v.ua.set = function(e) {
                b.setUA(e);
                var t = b.getResult();
                for (var n in t) v.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : this)
}, function(e, t) {
    (function(t) {
        e.exports = t
    }).call(this, {})
}, function(e, t) {
    ! function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }()
}]);
