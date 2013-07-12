function simplemaps_continentmap(auto) {
    (function () {
        var demo = false;
        var mapinfo = simplemaps_continentmap_mapinfo;
        var main_settings = simplemaps_continentmap_mapdata.main_settings;
        var locations = simplemaps_continentmap_mapdata.locations;
        var state_specific = simplemaps_continentmap_mapdata.state_specific;
        var getxy = simplemaps_continentmap_getxy;
        if (auto && main_settings.auto_load == "no") {
            return;
        }
        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };

        function is_touch() {
            return isMobile.any();
        }
        if (typeof Object.create !== "function") {
            Object.create = function (o) {
                function F() {}
                F.prototype = o;
                return new F;
            };
        }(function (e) {
            var t = "0.4.1",
                n = "hasOwnProperty",
                r = /[\.\/]/,
                i = "*",
                s = function () {}, o = function (e, t) {
                    return e - t;
                }, u, a, f = {
                    n: {}
                }, l = function (e, t) {
                    var n = f,
                        r = a,
                        i = Array.prototype.slice.call(arguments, 2),
                        s = l.listeners(e),
                        c = 0,
                        h = false,
                        p, d = [],
                        v = {}, m = [],
                        g = u,
                        y = [];
                    u = e, a = 0;
                    for (var b = 0, w = s.length; b < w; b++) {
                        "zIndex" in s[b] && (d.push(s[b].zIndex), s[b].zIndex < 0 && (v[s[b].zIndex] = s[b]));
                    }
                    d.sort(o);
                    while (d[c] < 0) {
                        p = v[d[c++]], m.push(p.apply(t, i));
                        if (a) {
                            return a = r, m;
                        }
                    }
                    for (b = 0; b < w; b++) {
                        p = s[b];
                        if ("zIndex" in p) {
                            if (p.zIndex == d[c]) {
                                m.push(p.apply(t, i));
                                if (a) {
                                    break;
                                }
                                do {
                                    c++, p = v[d[c]], p && m.push(p.apply(t, i));
                                    if (a) {
                                        break;
                                    }
                                } while (p);
                            } else {
                                v[p.zIndex] = p;
                            }
                        } else {
                            m.push(p.apply(t, i));
                            if (a) {
                                break;
                            }
                        }
                    }
                    return a = r, u = g, m.length ? m : null;
                };
            l._events = f, l.listeners = function (e) {
                var t = e.split(r),
                    n = f,
                    s, o, u, a, l, c, h, p, d = [n],
                    v = [];
                for (a = 0, l = t.length; a < l; a++) {
                    p = [];
                    for (c = 0, h = d.length; c < h; c++) {
                        n = d[c].n, o = [n[t[a]], n[i]], u = 2;
                        while (u--) {
                            s = o[u], s && (p.push(s), v = v.concat(s.f || []));
                        }
                    }
                    d = p;
                }
                return v;
            }, l.on = function (e, t) {
                var n = e.split(r),
                    i = f;
                for (var o = 0, u = n.length; o < u; o++) {
                    i = i.n, i = i.hasOwnProperty(n[o]) && i[n[o]] || (i[n[o]] = {
                        n: {}
                    });
                }
                i.f = i.f || [];
                for (o = 0, u = i.f.length; o < u; o++) {
                    if (i.f[o] == t) {
                        return s;
                    }
                }
                return i.f.push(t),
                function (e) {
                    +e == +e && (t.zIndex = +e);
                };
            }, l.f = function (e) {
                var t = [].slice.call(arguments, 1);
                return function () {
                    l.apply(null, [e, null].concat(t)
                        .concat([].slice.call(arguments, 0)));
                };
            }, l.stop = function () {
                a = 1;
            }, l.nt = function (e) {
                return e ? (new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)"))
                    .test(u) : u;
            }, l.off = l.unbind = function (e, t) {
                if (!e) {
                    l._events = f = {
                        n: {}
                    };
                    return;
                }
                var s = e.split(r),
                    o, u, a, c, h, p, d, v = [f];
                for (c = 0, h = s.length; c < h; c++) {
                    for (p = 0; p < v.length; p += a.length - 2) {
                        a = [p, 1], o = v[p].n;
                        if (s[c] != i) {
                            o[s[c]] && a.push(o[s[c]]);
                        } else {
                            for (u in o) {
                                o[n](u) && a.push(o[u]);
                            }
                        }
                        v.splice.apply(v, a);
                    }
                }
                for (c = 0, h = v.length; c < h; c++) {
                    o = v[c];
                    while (o.n) {
                        if (t) {
                            if (o.f) {
                                for (p = 0, d = o.f.length; p < d; p++) {
                                    if (o.f[p] == t) {
                                        o.f.splice(p, 1);
                                        break;
                                    }
                                }!o.f.length && delete o.f;
                            }
                            for (u in o.n) {
                                if (o.n[n](u) && o.n[u].f) {
                                    var m = o.n[u].f;
                                    for (p = 0, d = m.length; p < d; p++) {
                                        if (m[p] == t) {
                                            m.splice(p, 1);
                                            break;
                                        }
                                    }!m.length && delete o.n[u].f;
                                }
                            }
                        } else {
                            delete o.f;
                            for (u in o.n) {
                                o.n[n](u) && o.n[u].f && delete o.n[u].f;
                            }
                        }
                        o = o.n;
                    }
                }
            }, l.once = function (e, t) {
                var n = function () {
                    return l.unbind(e, n), t.apply(this, arguments);
                };
                return l.on(e, n);
            }, l.version = t, l.toString = function () {
                return "You are running Eve " + t;
            }, typeof module != "undefined" && module.exports ? (module.exports = l) : typeof define != "undefined" ? define("eve", [], function () {
                return l;
            }) : (e.eve = l);
        })(this), (function () {
            function e(n) {
                if (e.is(n, "function")) {
                    return t ? n() : eve.on("raphael.DOMload", n);
                }
                if (e.is(n, O)) {
                    return e._engine.create[h](e, n.splice(0, 3 + e.is(n[0], L)))
                        .add(n);
                }
                var r = Array.prototype.slice.call(arguments, 0);
                if (e.is(r[r.length - 1], "function")) {
                    var i = r.pop();
                    return t ? i.call(e._engine.create[h](e, r)) : eve.on("raphael.DOMload", function () {
                        i.call(e._engine.create[h](e, r));
                    });
                }
                return e._engine.create[h](e, arguments);
            }

            function ht(e) {
                if (Object(e) !== e) {
                    return e;
                }
                var t = new e.constructor;
                for (var n in e) {
                    e[o](n) && n !== "prototype" && (t[n] = ht(e[n]));
                }
                return t;
            }

            function wt(e, t) {
                for (var n = 0, r = e.length; n < r; n++) {
                    if (e[n] === t) {
                        return e.push(e.splice(n, 1)[0]);
                    }
                }
            }

            function Et(e, t, n) {
                function r() {
                    var i = Array.prototype.slice.call(arguments, 0),
                        s = i.join("?"),
                        u = r.cache = r.cache || {}, a = r.count = r.count || [];
                    return u[o](s) ? (wt(a, s), n ? n(u[s]) : u[s]) : (a.length >= 1000 && delete u[a.shift()], a.push(s), u[s] = e[h](t, i), n ? n(u[s]) : u[s]);
                }
                return r;
            }

            function xt() {
                return this.hex;
            }

            function Tt(e, t) {
                var n = [];
                for (var r = 0, i = e.length; i - 2 * !t > r; r += 2) {
                    var s = [{
                        x: +e[r - 2],
                        y: +e[r - 1]
                    }, {
                        x: +e[r],
                        y: +e[r + 1]
                    }, {
                        x: +e[r + 2],
                        y: +e[r + 3]
                    }, {
                        x: +e[r + 4],
                        y: +e[r + 5]
                    }];
                    t ? r ? i - 4 == r ? (s[3] = {
                        x: +e[0],
                        y: +e[1]
                    }) : i - 2 == r && (s[2] = {
                        x: +e[0],
                        y: +e[1]
                    }, s[3] = {
                        x: +e[2],
                        y: +e[3]
                    }) : (s[0] = {
                        x: +e[i - 2],
                        y: +e[i - 1]
                    }) : i - 4 == r ? (s[3] = s[2]) : r || (s[0] = {
                        x: +e[r],
                        y: +e[r + 1]
                    }), n.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y]);
                }
                return n;
            }

            function Ct(e, t, n, r, i) {
                var s = -3 * t + 9 * n - 9 * r + 3 * i,
                    o = e * s + 6 * t - 12 * n + 6 * r;
                return e * o - 3 * t + 3 * n;
            }

            function kt(e, t, n, r, i, s, o, u, a) {
                a == null && (a = 1), a = a > 1 ? 1 : a < 0 ? 0 : a;
                var f = a / 2,
                    l = 12,
                    c = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
                    h = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
                    p = 0;
                for (var d = 0; d < l; d++) {
                    var v = f * c[d] + f,
                        m = Ct(v, e, n, i, o),
                        g = Ct(v, t, r, s, u),
                        y = m * m + g * g;
                    p += h[d] * S.sqrt(y);
                }
                return f * p;
            }

            function Lt(e, t, n, r, i, s, o, u, a) {
                if (a < 0 || kt(e, t, n, r, i, s, o, u) < a) {
                    return;
                }
                var f = 1,
                    l = f / 2,
                    c = f - l,
                    h, p = 0.01;
                h = kt(e, t, n, r, i, s, o, u, c);
                while (N(h - a) > p) {
                    l /= 2, c += (h < a ? 1 : -1) * l, h = kt(e, t, n, r, i, s, o, u, c);
                }
                return c;
            }

            function At(e, t, n, r, i, s, o, u) {
                if (x(e, n) < T(i, o) || T(e, n) > x(i, o) || x(t, r) < T(s, u) || T(t, r) > x(s, u)) {
                    return;
                }
                var a = (e * r - t * n) * (i - o) - (e - n) * (i * u - s * o),
                    f = (e * r - t * n) * (s - u) - (t - r) * (i * u - s * o),
                    l = (e - n) * (s - u) - (t - r) * (i - o);
                if (!l) {
                    return;
                }
                var c = a / l,
                    h = f / l,
                    p = +c.toFixed(2),
                    d = +h.toFixed(2);
                if (p < +T(e, n)
                    .toFixed(2) || p > +x(e, n)
                    .toFixed(2) || p < +T(i, o)
                    .toFixed(2) || p > +x(i, o)
                    .toFixed(2) || d < +T(t, r)
                    .toFixed(2) || d > +x(t, r)
                    .toFixed(2) || d < +T(s, u)
                    .toFixed(2) || d > +x(s, u)
                    .toFixed(2)) {
                    return;
                }
                return {
                    x: c,
                    y: h
                };
            }

            function Ot(e, t) {
                return _t(e, t);
            }

            function Mt(e, t) {
                return _t(e, t, 1);
            }

            function _t(t, n, r) {
                var i = e.bezierBBox(t),
                    s = e.bezierBBox(n);
                if (!e.isBBoxIntersect(i, s)) {
                    return r ? 0 : [];
                }
                var o = kt.apply(0, t),
                    u = kt.apply(0, n),
                    a = ~~ (o / 5),
                    f = ~~ (u / 5),
                    l = [],
                    c = [],
                    h = {}, p = r ? 0 : [];
                for (var d = 0; d < a + 1; d++) {
                    var v = e.findDotsAtSegment.apply(e, t.concat(d / a));
                    l.push({
                        x: v.x,
                        y: v.y,
                        t: d / a
                    });
                }
                for (d = 0; d < f + 1; d++) {
                    v = e.findDotsAtSegment.apply(e, n.concat(d / f)), c.push({
                        x: v.x,
                        y: v.y,
                        t: d / f
                    });
                }
                for (d = 0; d < a; d++) {
                    for (var m = 0; m < f; m++) {
                        var g = l[d],
                            y = l[d + 1],
                            b = c[m],
                            w = c[m + 1],
                            E = N(y.x - g.x) < 0.001 ? "y" : "x",
                            S = N(w.x - b.x) < 0.001 ? "y" : "x",
                            x = At(g.x, g.y, y.x, y.y, b.x, b.y, w.x, w.y);
                        if (x) {
                            if (h[x.x.toFixed(4)] == x.y.toFixed(4)) {
                                continue;
                            }
                            h[x.x.toFixed(4)] = x.y.toFixed(4);
                            var T = g.t + N((x[E] - g[E]) / (y[E] - g[E])) * (y.t - g.t),
                                C = b.t + N((x[S] - b[S]) / (w[S] - b[S])) * (w.t - b.t);
                            T >= 0 && T <= 1 && C >= 0 && C <= 1 && (r ? p++ : p.push({
                                x: x.x,
                                y: x.y,
                                t1: T,
                                t2: C
                            }));
                        }
                    }
                }
                return p;
            }

            function Dt(t, n, r) {
                t = e._path2curve(t), n = e._path2curve(n);
                var i, s, o, u, a, f, l, c, h, p, d = r ? 0 : [];
                for (var v = 0, m = t.length; v < m; v++) {
                    var g = t[v];
                    if (g[0] == "M") {
                        i = a = g[1], s = f = g[2];
                    } else {
                        g[0] == "C" ? (h = [i, s].concat(g.slice(1)), i = h[6], s = h[7]) : (h = [i, s, i, s, a, f, a, f], i = a, s = f);
                        for (var y = 0, b = n.length; y < b; y++) {
                            var w = n[y];
                            if (w[0] == "M") {
                                o = l = w[1], u = c = w[2];
                            } else {
                                w[0] == "C" ? (p = [o, u].concat(w.slice(1)), o = p[6], u = p[7]) : (p = [o, u, o, u, l, c, l, c], o = l, u = c);
                                var E = _t(h, p, r);
                                if (r) {
                                    d += E;
                                } else {
                                    for (var S = 0, x = E.length; S < x; S++) {
                                        E[S].segment1 = v, E[S].segment2 = y, E[S].bez1 = h, E[S].bez2 = p;
                                    }
                                    d = d.concat(E);
                                }
                            }
                        }
                    }
                }
                return d;
            }

            function tn(e, t, n, r, i, s) {
                e != null ? (this.a = +e, this.b = +t, this.c = +n, this.d = +r, this.e = +i, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0);
            }

            function mn() {
                return this.x + m + this.y;
            }

            function gn() {
                return this.x + m + this.y + m + this.width + " \xD7 " + this.height;
            }

            function An(e, t, n, r, i, s) {
                function h(e) {
                    return ((a * e + u) * e + o) * e;
                }

                function p(e, t) {
                    var n = d(e, t);
                    return ((c * n + l) * n + f) * n;
                }

                function d(e, t) {
                    var n, r, i, s, f, l;
                    for (i = e, l = 0; l < 8; l++) {
                        s = h(i) - e;
                        if (N(s) < t) {
                            return i;
                        }
                        f = (3 * a * i + 2 * u) * i + o;
                        if (N(f) < 0.000001) {
                            break;
                        }
                        i -= s / f;
                    }
                    n = 0, r = 1, i = e;
                    if (i < n) {
                        return n;
                    }
                    if (i > r) {
                        return r;
                    }
                    while (n < r) {
                        s = h(i);
                        if (N(s - e) < t) {
                            return i;
                        }
                        e > s ? (n = i) : (r = i), i = (r - n) / 2 + n;
                    }
                    return i;
                }
                var o = 3 * t,
                    u = 3 * (r - t) - o,
                    a = 1 - o - u,
                    f = 3 * n,
                    l = 3 * (i - n) - f,
                    c = 1 - f - l;
                return p(e, 1 / (200 * s));
            }

            function On(e, t) {
                var n = [],
                    r = {};
                this.ms = t, this.times = 1;
                if (e) {
                    for (var i in e) {
                        e[o](i) && (r[U(i)] = e[i], n.push(U(i)));
                    }
                    n.sort(rt);
                }
                this.anim = r, this.top = n[n.length - 1], this.percents = n;
            }

            function Mn(t, r, i, s, u, a) {
                i = U(i);
                var f, l, c, h = [],
                    d, v, m, b = t.ms,
                    w = {}, E = {}, S = {};
                if (s) {
                    for (T = 0, N = Nn.length; T < N; T++) {
                        var x = Nn[T];
                        if (x.el.id == r.id && x.anim == t) {
                            x.percent != i ? (Nn.splice(T, 1), c = 1) : (l = x), r.attr(x.totalOrigin);
                            break;
                        }
                    }
                } else {
                    s = +E;
                }
                for (var T = 0, N = t.percents.length; T < N; T++) {
                    if (t.percents[T] == i || t.percents[T] > s * t.top) {
                        i = t.percents[T], v = t.percents[T - 1] || 0, b = b / t.top * (i - v), d = t.percents[T + 1], f = t.anim[i];
                        break;
                    }
                    s && r.attr(t.anim[t.percents[T]]);
                }
                if (!f) {
                    return;
                }
                if (!l) {
                    for (var C in f) {
                        if (f[o](C)) {
                            if (V[o](C) || r.paper.customAttributes[o](C)) {
                                w[C] = r.attr(C), w[C] == null && (w[C] = X[C]), E[C] = f[C];
                                switch (V[C]) {
                                case L:
                                    S[C] = (E[C] - w[C]) / b;
                                    break;
                                case "colour":
                                    w[C] = e.getRGB(w[C]);
                                    var k = e.getRGB(E[C]);
                                    S[C] = {
                                        r: (k.r - w[C].r) / b,
                                        g: (k.g - w[C].g) / b,
                                        b: (k.b - w[C].b) / b
                                    };
                                    break;
                                case "path":
                                    var A = zt(w[C], E[C]),
                                        O = A[1];
                                    w[C] = A[0], S[C] = [];
                                    for (T = 0, N = w[C].length; T < N; T++) {
                                        S[C][T] = [0];
                                        for (var M = 1, _ = w[C][T].length; M < _; M++) {
                                            S[C][T][M] = (O[T][M] - w[C][T][M]) / b;
                                        }
                                    }
                                    break;
                                case "transform":
                                    var D = r._,
                                        P = en(D[C], E[C]);
                                    if (P) {
                                        w[C] = P.from, E[C] = P.to, S[C] = [], S[C].real = true;
                                        for (T = 0, N = w[C].length; T < N; T++) {
                                            S[C][T] = [w[C][T][0]];
                                            for (M = 1, _ = w[C][T].length; M < _; M++) {
                                                S[C][T][M] = (E[C][T][M] - w[C][T][M]) / b;
                                            }
                                        }
                                    } else {
                                        var H = r.matrix || new tn,
                                            B = {
                                                _: {
                                                    transform: D.transform
                                                },
                                                getBBox: function () {
                                                    return r.getBBox(1);
                                                }
                                            };
                                        w[C] = [H.a, H.b, H.c, H.d, H.e, H.f], Yt(B, E[C]), E[C] = B._.transform, S[C] = [(B.matrix.a - H.a) / b, (B.matrix.b - H.b) / b, (B.matrix.c - H.c) / b, (B.matrix.d - H.d) / b, (B.matrix.e - H.e) / b, (B.matrix.f - H.f) / b];
                                    }
                                    break;
                                case "csv":
                                    var j = g(f[C])[y](n),
                                        F = g(w[C])[y](n);
                                    if (C == "clip-rect") {
                                        w[C] = F, S[C] = [], T = F.length;
                                        while (T--) {
                                            S[C][T] = (j[T] - w[C][T]) / b;
                                        }
                                    }
                                    E[C] = j;
                                    break;
                                default:
                                    j = [][p](f[C]), F = [][p](w[C]), S[C] = [], T = r.paper.customAttributes[C].length;
                                    while (T--) {
                                        S[C][T] = ((j[T] || 0) - (F[T] || 0)) / b;
                                    }
                                }
                            }
                        }
                    }
                    var q = f.easing,
                        R = e.easing_formulas[q];
                    if (!R) {
                        R = g(q)
                            .match(I);
                        if (R && R.length == 5) {
                            var z = R;
                            R = function (e) {
                                return An(e, +z[1], +z[2], +z[3], +z[4], b);
                            };
                        } else {
                            R = st;
                        }
                    }
                    m = f.start || t.start || +new Date, x = {
                        anim: t,
                        percent: i,
                        timestamp: m,
                        start: m + (t.del || 0),
                        status: 0,
                        initstatus: s || 0,
                        stop: false,
                        ms: b,
                        easing: R,
                        from: w,
                        diff: S,
                        to: E,
                        el: r,
                        callback: f.callback,
                        prev: v,
                        next: d,
                        repeat: a || t.times,
                        origin: r.attr(),
                        totalOrigin: u
                    }, Nn.push(x);
                    if (s && !l && !c) {
                        x.stop = true, x.start = new Date - b * s;
                        if (Nn.length == 1) {
                            return kn();
                        }
                    }
                    c && (x.start = new Date - x.ms * s), Nn.length == 1 && Cn(kn);
                } else {
                    l.initstatus = s, l.start = new Date - l.ms * s;
                }
                eve("raphael.anim.start." + r.id, r, t);
            }

            function _n(e) {
                for (var t = 0; t < Nn.length; t++) {
                    Nn[t].el.paper == e && Nn.splice(t--, 1);
                }
            }
            e.version = "2.1.0", e.eve = eve;
            var t, n = /[, ]+/,
                r = {
                    circle: 1,
                    rect: 1,
                    path: 1,
                    ellipse: 1,
                    text: 1,
                    image: 1
                }, i = /\{(\d+)\}/g,
                s = "prototype",
                o = "hasOwnProperty",
                u = {
                    doc: document,
                    win: window
                }, a = {
                    was: Object.prototype[o].call(u.win, "Raphael"),
                    is: u.win.Raphael
                }, f = function () {
                    this.ca = this.customAttributes = {};
                }, l, c = "appendChild",
                h = "apply",
                p = "concat",
                d = "createTouch" in u.doc,
                v = "",
                m = " ",
                g = String,
                y = "split",
                b = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [y](m),
                w = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                }, E = g.prototype.toLowerCase,
                S = Math,
                x = S.max,
                T = S.min,
                N = S.abs,
                C = S.pow,
                k = S.PI,
                L = "number",
                A = "string",
                O = "array",
                M = "toString",
                _ = "fill",
                D = Object.prototype.toString,
                P = {}, H = "push",
                B = e._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
                j = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
                F = {
                    NaN: 1,
                    Infinity: 1,
                    '-Infinity': 1
                }, I = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                q = S.round,
                R = "setAttribute",
                U = parseFloat,
                z = parseInt,
                W = g.prototype.toUpperCase,
                X = e._availableAttrs = {
                    'arrow-end': "none",
                    'arrow-start': "none",
                    blur: 0,
                    'clip-rect': "0 0 1e9 1e9",
                    cursor: "default",
                    cx: 0,
                    cy: 0,
                    fill: "#fff",
                    'fill-opacity': 1,
                    font: "10px \"Arial\"",
                    'font-family': "\"Arial\"",
                    'font-size': "10",
                    'font-style': "normal",
                    'font-weight': 400,
                    gradient: 0,
                    height: 0,
                    href: "http://raphaeljs.com/",
                    'letter-spacing': 0,
                    opacity: 1,
                    path: "M0,0",
                    r: 0,
                    rx: 0,
                    ry: 0,
                    src: "",
                    stroke: "#000",
                    'stroke-dasharray': "",
                    'stroke-linecap': "butt",
                    'stroke-linejoin': "butt",
                    'stroke-miterlimit': 0,
                    'stroke-opacity': 1,
                    'stroke-width': 1,
                    target: "_blank",
                    'text-anchor': "middle",
                    title: "Raphael",
                    transform: "",
                    width: 0,
                    x: 0,
                    y: 0
                }, V = e._availableAnimAttrs = {
                    blur: L,
                    'clip-rect': "csv",
                    cx: L,
                    cy: L,
                    fill: "colour",
                    'fill-opacity': L,
                    'font-size': L,
                    height: L,
                    opacity: L,
                    path: "path",
                    r: L,
                    rx: L,
                    ry: L,
                    stroke: "colour",
                    'stroke-opacity': L,
                    'stroke-width': L,
                    transform: "transform",
                    width: L,
                    x: L,
                    y: L
                }, $ = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
                J = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                K = {
                    hs: 1,
                    rg: 1
                }, Q = /,?([achlmqrstvxz]),?/gi,
                G = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                Y = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                Z = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                et = e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
                tt = {}, nt = function (e, t) {
                    return e.key - t.key;
                }, rt = function (e, t) {
                    return U(e) - U(t);
                }, it = function () {}, st = function (e) {
                    return e;
                }, ot = e._rectPath = function (e, t, n, r, i) {
                    return i ? [["M", e + i, t], ["l", n - i * 2, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - i * 2], ["a", i, i, 0, 0, 1, -i, i], ["l", i * 2 - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, i * 2 - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]] : [["M", e, t], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]];
                }, ut = function (e, t, n, r) {
                    return r == null && (r = n), [["M", e, t], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
                }, at = e._getPath = {
                    path: function (e) {
                        return e.attr("path");
                    },
                    circle: function (e) {
                        var t = e.attrs;
                        return ut(t.cx, t.cy, t.r);
                    },
                    ellipse: function (e) {
                        var t = e.attrs;
                        return ut(t.cx, t.cy, t.rx, t.ry);
                    },
                    rect: function (e) {
                        var t = e.attrs;
                        return ot(t.x, t.y, t.width, t.height, t.r);
                    },
                    image: function (e) {
                        var t = e.attrs;
                        return ot(t.x, t.y, t.width, t.height);
                    },
                    text: function (e) {
                        var t = e._getBBox();
                        return ot(t.x, t.y, t.width, t.height);
                    }
                }, ft = e.mapPath = function (e, t) {
                    if (!t) {
                        return e;
                    }
                    var n, r, i, s, o, u, a;
                    e = zt(e);
                    for (i = 0, o = e.length; i < o; i++) {
                        a = e[i];
                        for (s = 1, u = a.length; s < u; s += 2) {
                            n = t.x(a[s], a[s + 1]), r = t.y(a[s], a[s + 1]), a[s] = n, a[s + 1] = r;
                        }
                    }
                    return e;
                };
            e._g = u, e.type = u.win.SVGAngle || u.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
            if (e.type == "VML") {
                var lt = u.doc.createElement("div"),
                    ct;
                lt.innerHTML = "<v:shape adj=\"1\"/>", ct = lt.firstChild, ct.style.behavior = "url(#default#VML)";
                if (!ct || typeof ct.adj != "object") {
                    return e.type = v;
                }
                lt = null;
            }
            e.svg = !(e.vml = e.type == "VML"), e._Paper = f, e.fn = l = f.prototype = e.prototype, e._id = 0, e._oid = 0, e.is = function (e, t) {
                return t = E.call(t), t == "finite" ? !F[o](+e) : t == "array" ? e instanceof Array : t == "null" && e === null || t == typeof e && e !== null || t == "object" && e === Object(e) || t == "array" && Array.isArray && Array.isArray(e) || D.call(e)
                    .slice(8, -1)
                    .toLowerCase() == t;
            }, e.angle = function (t, n, r, i, s, o) {
                if (s == null) {
                    var u = t - r,
                        a = n - i;
                    return !u && !a ? 0 : (180 + S.atan2(-a, -u) * 180 / k + 360) % 360;
                }
                return e.angle(t, n, s, o) - e.angle(r, i, s, o);
            }, e.rad = function (e) {
                return e % 360 * k / 180;
            }, e.deg = function (e) {
                return e * 180 / k % 360;
            }, e.snapTo = function (t, n, r) {
                r = e.is(r, "finite") ? r : 10;
                if (e.is(t, O)) {
                    var i = t.length;
                    while (i--) {
                        if (N(t[i] - n) <= r) {
                            return t[i];
                        }
                    }
                } else {
                    t = +t;
                    var s = n % t;
                    if (s < r) {
                        return n - s;
                    }
                    if (s > t - r) {
                        return n - s + t;
                    }
                }
                return n;
            };
            var pt = e.createUUID = (function (e, t) {
                return function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(e, t)
                        .toUpperCase();
                };
            })(/[xy]/g, function (e) {
                var t = S.random() * 16 | 0,
                    n = e == "x" ? t : t & 3 | 8;
                return n.toString(16);
            });
            e.setWindow = function (t) {
                eve("raphael.setWindow", e, u.win, t), u.win = t, u.doc = u.win.document, e._engine.initWin && e._engine.initWin(u.win);
            };
            var dt = function (t) {
                if (e.vml) {
                    var n = /^\s+|\s+$/g,
                        r;
                    try {
                        var i = new ActiveXObject("htmlfile");
                        i.write("<body>"), i.close(), r = i.body;
                    } catch (s) {
                        r = createPopup()
                            .document.body;
                    }
                    var o = r.createTextRange();
                    dt = Et(function (e) {
                        try {
                            r.style.color = g(e)
                                .replace(n, v);
                            var t = o.queryCommandValue("ForeColor");
                            return t = (t & 255) << 16 | t & 65280 | (t & 16711680) >>> 16, "#" + ("000000" + t.toString(16))
                                .slice(-6);
                        } catch (i) {
                            return "none";
                        }
                    });
                } else {
                    var a = u.doc.createElement("i");
                    a.title = "Rapha\xEBl Colour Picker", a.style.display = "none", u.doc.body.appendChild(a), dt = Et(function (e) {
                        return a.style.color = e, u.doc.defaultView.getComputedStyle(a, v)
                            .getPropertyValue("color");
                    });
                }
                return dt(t);
            }, vt = function () {
                    return "hsb(" + [this.h, this.s, this.b] + ")";
                }, mt = function () {
                    return "hsl(" + [this.h, this.s, this.l] + ")";
                }, gt = function () {
                    return this.hex;
                }, yt = function (t, n, r) {
                    n == null && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, n = t.g, t = t.r);
                    if (n == null && e.is(t, A)) {
                        var i = e.getRGB(t);
                        t = i.r, n = i.g, r = i.b;
                    }
                    if (t > 1 || n > 1 || r > 1) {
                        t /= 255, n /= 255, r /= 255;
                    }
                    return [t, n, r];
                }, bt = function (t, n, r, i) {
                    t *= 255, n *= 255, r *= 255;
                    var s = {
                        r: t,
                        g: n,
                        b: r,
                        hex: e.rgb(t, n, r),
                        toString: gt
                    };
                    return e.is(i, "finite") && (s.opacity = i), s;
                };
            e.color = function (t) {
                var n;
                return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (n = e.hsb2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.hex = n.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (n = e.hsl2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.hex = n.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (n = e.rgb2hsl(t), t.h = n.h, t.s = n.s, t.l = n.l, n = e.rgb2hsb(t), t.v = n.b) : (t = {
                    hex: "none"
                }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = gt, t;
            }, e.hsb2rgb = function (e, t, n, r) {
                this.is(e, "object") && "h" in e && "s" in e && "b" in e && (n = e.b, t = e.s, e = e.h, r = e.o), e *= 360;
                var i, s, o, u, a;
                return e = e % 360 / 60, a = n * t, u = a * (1 - N(e % 2 - 1)), i = s = o = n - a, e = ~~e, i += [a, u, 0, 0, u, a][e], s += [u, a, a, u, 0, 0][e], o += [0, 0, u, a, a, u][e], bt(i, s, o, r);
            }, e.hsl2rgb = function (e, t, n, r) {
                this.is(e, "object") && "h" in e && "s" in e && "l" in e && (n = e.l, t = e.s, e = e.h);
                if (e > 1 || t > 1 || n > 1) {
                    e /= 360, t /= 100, n /= 100;
                }
                e *= 360;
                var i, s, o, u, a;
                return e = e % 360 / 60, a = 2 * t * (n < 0.5 ? n : 1 - n), u = a * (1 - N(e % 2 - 1)), i = s = o = n - a / 2, e = ~~e, i += [a, u, 0, 0, u, a][e], s += [u, a, a, u, 0, 0][e], o += [0, 0, u, a, a, u][e], bt(i, s, o, r);
            }, e.rgb2hsb = function (e, t, n) {
                n = yt(e, t, n), e = n[0], t = n[1], n = n[2];
                var r, i, s, o;
                return s = x(e, t, n), o = s - T(e, t, n), r = o == 0 ? null : s == e ? (t - n) / o : s == t ? (n - e) / o + 2 : (e - t) / o + 4, r = (r + 360) % 6 * 60 / 360, i = o == 0 ? 0 : o / s, {
                    h: r,
                    s: i,
                    b: s,
                    toString: vt
                };
            }, e.rgb2hsl = function (e, t, n) {
                n = yt(e, t, n), e = n[0], t = n[1], n = n[2];
                var r, i, s, o, u, a;
                return o = x(e, t, n), u = T(e, t, n), a = o - u, r = a == 0 ? null : o == e ? (t - n) / a : o == t ? (n - e) / a + 2 : (e - t) / a + 4, r = (r + 360) % 6 * 60 / 360, s = (o + u) / 2, i = a == 0 ? 0 : s < 0.5 ? a / (2 * s) : a / (2 - 2 * s), {
                    h: r,
                    s: i,
                    l: s,
                    toString: mt
                };
            }, e._path2string = function () {
                if (this.length) {
                    return this.join(",")
                        .replace(Q, "$1");
                }
            };
            var St = e._preload = function (e, t) {
                var n = u.doc.createElement("img");
                n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function () {
                    t.call(this), this.onload = null, u.doc.body.removeChild(this);
                }, n.onerror = function () {
                    u.doc.body.removeChild(this);
                }, u.doc.body.appendChild(n), n.src = e;
            };
            e.getRGB = Et(function (t) {
                if (!t || !! ((t = g(t))
                    .indexOf("-") + 1)) {
                    return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: xt
                    };
                }
                if (t == "none") {
                    return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: xt
                    };
                }!K[o](t.toLowerCase()
                    .substring(0, 2)) && t.charAt() != "#" && (t = dt(t));
                var n, r, i, s, u, a, f, l = t.match(j);
                return l ? (l[2] && (s = z(l[2].substring(5), 16), i = z(l[2].substring(3, 5), 16), r = z(l[2].substring(1, 3), 16)), l[3] && (s = z((a = l[3].charAt(3)) + a, 16), i = z((a = l[3].charAt(2)) + a, 16), r = z((a = l[3].charAt(1)) + a, 16)), l[4] && (f = l[4][y](J), r = U(f[0]), f[0].slice(-1) == "%" && (r *= 2.55), i = U(f[1]), f[1].slice(-1) == "%" && (i *= 2.55), s = U(f[2]), f[2].slice(-1) == "%" && (s *= 2.55), l[1].toLowerCase()
                    .slice(0, 4) == "rgba" && (u = U(f[3])), f[3] && f[3].slice(-1) == "%" && (u /= 100)), l[5] ? (f = l[5][y](J), r = U(f[0]), f[0].slice(-1) == "%" && (r *= 2.55), i = U(f[1]), f[1].slice(-1) == "%" && (i *= 2.55), s = U(f[2]), f[2].slice(-1) == "%" && (s *= 2.55), (f[0].slice(-3) == "deg" || f[0].slice(-1) == "\xB0") && (r /= 360), l[1].toLowerCase()
                    .slice(0, 4) == "hsba" && (u = U(f[3])), f[3] && f[3].slice(-1) == "%" && (u /= 100), e.hsb2rgb(r, i, s, u)) : l[6] ? (f = l[6][y](J), r = U(f[0]), f[0].slice(-1) == "%" && (r *= 2.55), i = U(f[1]), f[1].slice(-1) == "%" && (i *= 2.55), s = U(f[2]), f[2].slice(-1) == "%" && (s *= 2.55), (f[0].slice(-3) == "deg" || f[0].slice(-1) == "\xB0") && (r /= 360), l[1].toLowerCase()
                    .slice(0, 4) == "hsla" && (u = U(f[3])), f[3] && f[3].slice(-1) == "%" && (u /= 100), e.hsl2rgb(r, i, s, u)) : (l = {
                        r: r,
                        g: i,
                        b: s,
                        toString: xt
                    }, l.hex = "#" + (16777216 | s | i << 8 | r << 16)
                    .toString(16)
                    .slice(1), e.is(u, "finite") && (l.opacity = u), l)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: xt
                };
            }, e), e.hsb = Et(function (t, n, r) {
                return e.hsb2rgb(t, n, r)
                    .hex;
            }), e.hsl = Et(function (t, n, r) {
                return e.hsl2rgb(t, n, r)
                    .hex;
            }), e.rgb = Et(function (e, t, n) {
                return "#" + (16777216 | n | t << 8 | e << 16)
                    .toString(16)
                    .slice(1);
            }), e.getColor = function (e) {
                var t = this.getColor.start = this.getColor.start || {
                    h: 0,
                    s: 1,
                    b: e || 0.75
                }, n = this.hsb2rgb(t.h, t.s, t.b);
                return t.h += 0.075, t.h > 1 && (t.h = 0, t.s -= 0.2, t.s <= 0 && (this.getColor.start = {
                    h: 0,
                    s: 1,
                    b: t.b
                })), n.hex;
            }, e.getColor.reset = function () {
                delete this.start;
            }, e.parsePathString = function (t) {
                if (!t) {
                    return null;
                }
                var n = Nt(t);
                if (n.arr) {
                    return Ht(n.arr);
                }
                var r = {
                    a: 7,
                    c: 6,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    z: 0
                }, i = [];
                return e.is(t, O) && e.is(t[0], O) && (i = Ht(t)), i.length || g(t)
                    .replace(G, function (e, t, n) {
                        var s = [],
                            o = t.toLowerCase();
                        n.replace(Z, function (e, t) {
                            t && s.push(+t);
                        }), o == "m" && s.length > 2 && (i.push([t][p](s.splice(0, 2))), o = "l", t = t == "m" ? "l" : "L");
                        if (o == "r") {
                            i.push([t][p](s));
                        } else {
                            while (s.length >= r[o]) {
                                i.push([t][p](s.splice(0, r[o])));
                                if (!r[o]) {
                                    break;
                                }
                            }
                        }
                    }), i.toString = e._path2string, n.arr = Ht(i), i;
            }, e.parseTransformString = Et(function (t) {
                if (!t) {
                    return null;
                }
                var n = {
                    r: 3,
                    s: 4,
                    t: 2,
                    m: 6
                }, r = [];
                return e.is(t, O) && e.is(t[0], O) && (r = Ht(t)), r.length || g(t)
                    .replace(Y, function (e, t, n) {
                        var i = [],
                            s = E.call(t);
                        n.replace(Z, function (e, t) {
                            t && i.push(+t);
                        }), r.push([t][p](i));
                    }), r.toString = e._path2string, r;
            });
            var Nt = function (e) {
                var t = Nt.ps = Nt.ps || {};
                return t[e] ? (t[e].sleep = 100) : (t[e] = {
                    sleep: 100
                }), setTimeout(function () {
                    for (var n in t) {
                        t[o](n) && n != e && (t[n].sleep--, !t[n].sleep && delete t[n]);
                    }
                }), t[e];
            };
            e.findDotsAtSegment = function (e, t, n, r, i, s, o, u, a) {
                var f = 1 - a,
                    l = C(f, 3),
                    c = C(f, 2),
                    h = a * a,
                    p = h * a,
                    d = l * e + c * 3 * a * n + f * 3 * a * a * i + p * o,
                    v = l * t + c * 3 * a * r + f * 3 * a * a * s + p * u,
                    m = e + 2 * a * (n - e) + h * (i - 2 * n + e),
                    g = t + 2 * a * (r - t) + h * (s - 2 * r + t),
                    y = n + 2 * a * (i - n) + h * (o - 2 * i + n),
                    b = r + 2 * a * (s - r) + h * (u - 2 * s + r),
                    w = f * e + a * n,
                    E = f * t + a * r,
                    x = f * i + a * o,
                    T = f * s + a * u,
                    N = 90 - S.atan2(m - y, g - b) * 180 / k;
                return (m > y || g < b) && (N += 180), {
                    x: d,
                    y: v,
                    m: {
                        x: m,
                        y: g
                    },
                    n: {
                        x: y,
                        y: b
                    },
                    start: {
                        x: w,
                        y: E
                    },
                    end: {
                        x: x,
                        y: T
                    },
                    alpha: N
                };
            }, e.bezierBBox = function (t, n, r, i, s, o, u, a) {
                e.is(t, "array") || (t = [t, n, r, i, s, o, u, a]);
                var f = Ut.apply(null, t);
                return {
                    x: f.min.x,
                    y: f.min.y,
                    x2: f.max.x,
                    y2: f.max.y,
                    width: f.max.x - f.min.x,
                    height: f.max.y - f.min.y
                };
            }, e.isPointInsideBBox = function (e, t, n) {
                return t >= e.x && t <= e.x2 && n >= e.y && n <= e.y2;
            }, e.isBBoxIntersect = function (t, n) {
                var r = e.isPointInsideBBox;
                return r(n, t.x, t.y) || r(n, t.x2, t.y) || r(n, t.x, t.y2) || r(n, t.x2, t.y2) || r(t, n.x, n.y) || r(t, n.x2, n.y) || r(t, n.x, n.y2) || r(t, n.x2, n.y2) || (t.x < n.x2 && t.x > n.x || n.x < t.x2 && n.x > t.x) && (t.y < n.y2 && t.y > n.y || n.y < t.y2 && n.y > t.y);
            }, e.pathIntersection = function (e, t) {
                return Dt(e, t);
            }, e.pathIntersectionNumber = function (e, t) {
                return Dt(e, t, 1);
            }, e.isPointInsidePath = function (t, n, r) {
                var i = e.pathBBox(t);
                return e.isPointInsideBBox(i, n, r) && Dt(t, [["M", n, r], ["H", i.x2 + 10]], 1) % 2 == 1;
            }, e._removedFactory = function (e) {
                return function () {
                    eve("raphael.log", null, "Rapha\xEBl: you are calling to method \x93" + e + "\x94 of removed object", e);
                };
            };
            var Pt = e.pathBBox = function (e) {
                var t = Nt(e);
                if (t.bbox) {
                    return t.bbox;
                }
                if (!e) {
                    return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        x2: 0,
                        y2: 0
                    };
                }
                e = zt(e);
                var n = 0,
                    r = 0,
                    i = [],
                    s = [],
                    o;
                for (var u = 0, a = e.length; u < a; u++) {
                    o = e[u];
                    if (o[0] == "M") {
                        n = o[1], r = o[2], i.push(n), s.push(r);
                    } else {
                        var f = Ut(n, r, o[1], o[2], o[3], o[4], o[5], o[6]);
                        i = i[p](f.min.x, f.max.x), s = s[p](f.min.y, f.max.y), n = o[5], r = o[6];
                    }
                }
                var l = T[h](0, i),
                    c = T[h](0, s),
                    d = x[h](0, i),
                    v = x[h](0, s),
                    m = {
                        x: l,
                        y: c,
                        x2: d,
                        y2: v,
                        width: d - l,
                        height: v - c
                    };
                return t.bbox = ht(m), m;
            }, Ht = function (t) {
                    var n = ht(t);
                    return n.toString = e._path2string, n;
                }, Bt = e._pathToRelative = function (t) {
                    var n = Nt(t);
                    if (n.rel) {
                        return Ht(n.rel);
                    }
                    if (!e.is(t, O) || !e.is(t && t[0], O)) {
                        t = e.parsePathString(t);
                    }
                    var r = [],
                        i = 0,
                        s = 0,
                        o = 0,
                        u = 0,
                        a = 0;
                    t[0][0] == "M" && (i = t[0][1], s = t[0][2], o = i, u = s, a++, r.push(["M", i, s]));
                    for (var f = a, l = t.length; f < l; f++) {
                        var c = r[f] = [],
                            h = t[f];
                        if (h[0] != E.call(h[0])) {
                            c[0] = E.call(h[0]);
                            switch (c[0]) {
                            case "a":
                                c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +(h[6] - i)
                                    .toFixed(3), c[7] = +(h[7] - s)
                                    .toFixed(3);
                                break;
                            case "v":
                                c[1] = +(h[1] - s)
                                    .toFixed(3);
                                break;
                            case "m":
                                o = h[1], u = h[2];
                            default:
                                for (var p = 1, d = h.length; p < d; p++) {
                                    c[p] = +(h[p] - (p % 2 ? i : s))
                                        .toFixed(3);
                                }
                            }
                        } else {
                            c = r[f] = [], h[0] == "m" && (o = h[1] + i, u = h[2] + s);
                            for (var v = 0, m = h.length; v < m; v++) {
                                r[f][v] = h[v];
                            }
                        }
                        var g = r[f].length;
                        switch (r[f][0]) {
                        case "z":
                            i = o, s = u;
                            break;
                        case "h":
                            i += +r[f][g - 1];
                            break;
                        case "v":
                            s += +r[f][g - 1];
                            break;
                        default:
                            i += +r[f][g - 2], s += +r[f][g - 1];
                        }
                    }
                    return r.toString = e._path2string, n.rel = Ht(r), r;
                }, jt = e._pathToAbsolute = function (t) {
                    var n = Nt(t);
                    if (n.abs) {
                        return Ht(n.abs);
                    }
                    if (!e.is(t, O) || !e.is(t && t[0], O)) {
                        t = e.parsePathString(t);
                    }
                    if (!t || !t.length) {
                        return [["M", 0, 0]];
                    }
                    var r = [],
                        i = 0,
                        s = 0,
                        o = 0,
                        u = 0,
                        a = 0;
                    t[0][0] == "M" && (i = +t[0][1], s = +t[0][2], o = i, u = s, a++, r[0] = ["M", i, s]);
                    var f = t.length == 3 && t[0][0] == "M" && t[1][0].toUpperCase() == "R" && t[2][0].toUpperCase() == "Z";
                    for (var l, c, h = a, d = t.length; h < d; h++) {
                        r.push(l = []), c = t[h];
                        if (c[0] != W.call(c[0])) {
                            l[0] = W.call(c[0]);
                            switch (l[0]) {
                            case "A":
                                l[1] = c[1], l[2] = c[2], l[3] = c[3], l[4] = c[4], l[5] = c[5], l[6] = +(c[6] + i), l[7] = +(c[7] + s);
                                break;
                            case "V":
                                l[1] = +c[1] + s;
                                break;
                            case "H":
                                l[1] = +c[1] + i;
                                break;
                            case "R":
                                var v = [i, s][p](c.slice(1));
                                for (var m = 2, g = v.length; m < g; m++) {
                                    v[m] = +v[m] + i, v[++m] = +v[m] + s;
                                }
                                r.pop(), r = r[p](Tt(v, f));
                                break;
                            case "M":
                                o = +c[1] + i, u = +c[2] + s;
                            default:
                                for (m = 1, g = c.length; m < g; m++) {
                                    l[m] = +c[m] + (m % 2 ? i : s);
                                }
                            }
                        } else if (c[0] == "R") {
                            v = [i, s][p](c.slice(1)), r.pop(), r = r[p](Tt(v, f)), l = ["R"][p](c.slice(-2));
                        } else {
                            for (var y = 0, b = c.length; y < b; y++) {
                                l[y] = c[y];
                            }
                        }
                        switch (l[0]) {
                        case "Z":
                            i = o, s = u;
                            break;
                        case "H":
                            i = l[1];
                            break;
                        case "V":
                            s = l[1];
                            break;
                        case "M":
                            o = l[l.length - 2], u = l[l.length - 1];
                        default:
                            i = l[l.length - 2], s = l[l.length - 1];
                        }
                    }
                    return r.toString = e._path2string, n.abs = Ht(r), r;
                }, Ft = function (e, t, n, r) {
                    return [e, t, n, r, n, r];
                }, It = function (e, t, n, r, i, s) {
                    var o = 0.3333333333333333,
                        u = 0.6666666666666666;
                    return [o * e + u * n, o * t + u * r, o * i + u * n, o * s + u * r, i, s];
                }, qt = function (e, t, n, r, i, s, o, u, a, f) {
                    var l = k * 120 / 180,
                        c = k / 180 * (+i || 0),
                        h = [],
                        d, v = Et(function (e, t, n) {
                            var r = e * S.cos(n) - t * S.sin(n),
                                i = e * S.sin(n) + t * S.cos(n);
                            return {
                                x: r,
                                y: i
                            };
                        });
                    if (!f) {
                        d = v(e, t, -c), e = d.x, t = d.y, d = v(u, a, -c), u = d.x, a = d.y;
                        var m = S.cos(k / 180 * i),
                            g = S.sin(k / 180 * i),
                            b = (e - u) / 2,
                            w = (t - a) / 2,
                            E = b * b / (n * n) + w * w / (r * r);
                        E > 1 && (E = S.sqrt(E), n = E * n, r = E * r);
                        var x = n * n,
                            T = r * r,
                            C = (s == o ? -1 : 1) * S.sqrt(N((x * T - x * w * w - T * b * b) / (x * w * w + T * b * b))),
                            L = C * n * w / r + (e + u) / 2,
                            A = C * -r * b / n + (t + a) / 2,
                            O = S.asin(((t - A) / r)
                                .toFixed(9)),
                            M = S.asin(((a - A) / r)
                                .toFixed(9));
                        O = e < L ? k - O : O, M = u < L ? k - M : M, O < 0 && (O = k * 2 + O), M < 0 && (M = k * 2 + M), o && O > M && (O -= k * 2), !o && M > O && (M -= k * 2);
                    } else {
                        O = f[0], M = f[1], L = f[2], A = f[3];
                    }
                    var _ = M - O;
                    if (N(_) > l) {
                        var D = M,
                            P = u,
                            H = a;
                        M = O + l * (o && M > O ? 1 : -1), u = L + n * S.cos(M), a = A + r * S.sin(M), h = qt(u, a, n, r, i, 0, o, P, H, [M, D, L, A]);
                    }
                    _ = M - O;
                    var B = S.cos(O),
                        j = S.sin(O),
                        F = S.cos(M),
                        I = S.sin(M),
                        q = S.tan(_ / 4),
                        R = 1.3333333333333333 * n * q,
                        U = 1.3333333333333333 * r * q,
                        z = [e, t],
                        W = [e + R * j, t - U * B],
                        X = [u + R * I, a - U * F],
                        V = [u, a];
                    W[0] = 2 * z[0] - W[0], W[1] = 2 * z[1] - W[1];
                    if (f) {
                        return [W, X, V][p](h);
                    }
                    h = [W, X, V][p](h)
                        .join()[y](",");
                    var $ = [];
                    for (var J = 0, K = h.length; J < K; J++) {
                        $[J] = J % 2 ? v(h[J - 1], h[J], c)
                            .y : v(h[J], h[J + 1], c)
                            .x;
                    }
                    return $;
                }, Rt = function (e, t, n, r, i, s, o, u, a) {
                    var f = 1 - a;
                    return {
                        x: C(f, 3) * e + C(f, 2) * 3 * a * n + f * 3 * a * a * i + C(a, 3) * o,
                        y: C(f, 3) * t + C(f, 2) * 3 * a * r + f * 3 * a * a * s + C(a, 3) * u
                    };
                }, Ut = Et(function (e, t, n, r, i, s, o, u) {
                    var a = i - 2 * n + e - (o - 2 * i + n),
                        f = 2 * (n - e) - 2 * (i - n),
                        l = e - n,
                        c = (-f + S.sqrt(f * f - 4 * a * l)) / 2 / a,
                        p = (-f - S.sqrt(f * f - 4 * a * l)) / 2 / a,
                        d = [t, u],
                        v = [e, o],
                        m;
                    return N(c) > "1e12" && (c = 0.5), N(p) > "1e12" && (p = 0.5), c > 0 && c < 1 && (m = Rt(e, t, n, r, i, s, o, u, c), v.push(m.x), d.push(m.y)), p > 0 && p < 1 && (m = Rt(e, t, n, r, i, s, o, u, p), v.push(m.x), d.push(m.y)), a = s - 2 * r + t - (u - 2 * s + r), f = 2 * (r - t) - 2 * (s - r), l = t - r, c = (-f + S.sqrt(f * f - 4 * a * l)) / 2 / a, p = (-f - S.sqrt(f * f - 4 * a * l)) / 2 / a, N(c) > "1e12" && (c = 0.5), N(p) > "1e12" && (p = 0.5), c > 0 && c < 1 && (m = Rt(e, t, n, r, i, s, o, u, c), v.push(m.x), d.push(m.y)), p > 0 && p < 1 && (m = Rt(e, t, n, r, i, s, o, u, p), v.push(m.x), d.push(m.y)), {
                        min: {
                            x: T[h](0, v),
                            y: T[h](0, d)
                        },
                        max: {
                            x: x[h](0, v),
                            y: x[h](0, d)
                        }
                    };
                }),
                zt = e._path2curve = Et(function (e, t) {
                    var n = !t && Nt(e);
                    if (!t && n.curve) {
                        return Ht(n.curve);
                    }
                    var r = jt(e),
                        i = t && jt(t),
                        s = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, o = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null
                        }, u = function (e, t) {
                            var n, r;
                            if (!e) {
                                return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                            }!(e[0] in {
                                T: 1,
                                Q: 1
                            }) && (t.qx = t.qy = null);
                            switch (e[0]) {
                            case "M":
                                t.X = e[1], t.Y = e[2];
                                break;
                            case "A":
                                e = ["C"][p](qt[h](0, [t.x, t.y][p](e.slice(1))));
                                break;
                            case "S":
                                n = t.x + (t.x - (t.bx || t.x)), r = t.y + (t.y - (t.by || t.y)), e = ["C", n, r][p](e.slice(1));
                                break;
                            case "T":
                                t.qx = t.x + (t.x - (t.qx || t.x)), t.qy = t.y + (t.y - (t.qy || t.y)), e = ["C"][p](It(t.x, t.y, t.qx, t.qy, e[1], e[2]));
                                break;
                            case "Q":
                                t.qx = e[1], t.qy = e[2], e = ["C"][p](It(t.x, t.y, e[1], e[2], e[3], e[4]));
                                break;
                            case "L":
                                e = ["C"][p](Ft(t.x, t.y, e[1], e[2]));
                                break;
                            case "H":
                                e = ["C"][p](Ft(t.x, t.y, e[1], t.y));
                                break;
                            case "V":
                                e = ["C"][p](Ft(t.x, t.y, t.x, e[1]));
                                break;
                            case "Z":
                                e = ["C"][p](Ft(t.x, t.y, t.X, t.Y));
                            default:
                                ;
                            }
                            return e;
                        }, a = function (e, t) {
                            if (e[t].length > 7) {
                                e[t].shift();
                                var n = e[t];
                                while (n.length) {
                                    e.splice(t++, 0, ["C"][p](n.splice(0, 6)));
                                }
                                e.splice(t, 1), c = x(r.length, i && i.length || 0);
                            }
                        }, f = function (e, t, n, s, o) {
                            e && t && e[o][0] == "M" && t[o][0] != "M" && (t.splice(o, 0, ["M", s.x, s.y]), n.bx = 0, n.by = 0, n.x = e[o][1], n.y = e[o][2], c = x(r.length, i && i.length || 0));
                        };
                    for (var l = 0, c = x(r.length, i && i.length || 0); l < c; l++) {
                        r[l] = u(r[l], s), a(r, l), i && (i[l] = u(i[l], o)), i && a(i, l), f(r, i, s, o, l), f(i, r, o, s, l);
                        var d = r[l],
                            v = i && i[l],
                            m = d.length,
                            g = i && v.length;
                        s.x = d[m - 2], s.y = d[m - 1], s.bx = U(d[m - 4]) || s.x, s.by = U(d[m - 3]) || s.y, o.bx = i && (U(v[g - 4]) || o.x), o.by = i && (U(v[g - 3]) || o.y), o.x = i && v[g - 2], o.y = i && v[g - 1];
                    }
                    return i || (n.curve = Ht(r)), i ? [r, i] : r;
                }, null, Ht),
                Wt = e._parseDots = Et(function (t) {
                    var n = [];
                    for (var r = 0, i = t.length; r < i; r++) {
                        var s = {}, o = t[r].match(/^([^:]*):?([\d\.]*)/);
                        s.color = e.getRGB(o[1]);
                        if (s.color.error) {
                            return null;
                        }
                        s.color = s.color.hex, o[2] && (s.offset = o[2] + "%"), n.push(s);
                    }
                    for (r = 1, i = n.length - 1; r < i; r++) {
                        if (!n[r].offset) {
                            var u = U(n[r - 1].offset || 0),
                                a = 0;
                            for (var f = r + 1; f < i; f++) {
                                if (n[f].offset) {
                                    a = n[f].offset;
                                    break;
                                }
                            }
                            a || (a = 100, f = i), a = U(a);
                            var l = (a - u) / (f - r + 1);
                            for (; r < f; r++) {
                                u += l, n[r].offset = u + "%";
                            }
                        }
                    }
                    return n;
                }),
                Xt = e._tear = function (e, t) {
                    e == t.top && (t.top = e.prev), e == t.bottom && (t.bottom = e.next), e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next);
                }, Vt = e._tofront = function (e, t) {
                    if (t.top === e) {
                        return;
                    }
                    Xt(e, t), e.next = null, e.prev = t.top, t.top.next = e, t.top = e;
                }, $t = e._toback = function (e, t) {
                    if (t.bottom === e) {
                        return;
                    }
                    Xt(e, t), e.next = t.bottom, e.prev = null, t.bottom.prev = e, t.bottom = e;
                }, Jt = e._insertafter = function (e, t, n) {
                    Xt(e, n), t == n.top && (n.top = e), t.next && (t.next.prev = e), e.next = t.next, e.prev = t, t.next = e;
                }, Kt = e._insertbefore = function (e, t, n) {
                    Xt(e, n), t == n.bottom && (n.bottom = e), t.prev && (t.prev.next = e), e.prev = t.prev, t.prev = e, e.next = t;
                }, Qt = e.toMatrix = function (e, t) {
                    var n = Pt(e),
                        r = {
                            _: {
                                transform: v
                            },
                            getBBox: function () {
                                return n;
                            }
                        };
                    return Yt(r, t), r.matrix;
                }, Gt = e.transformPath = function (e, t) {
                    return ft(e, Qt(e, t));
                }, Yt = e._extractTransform = function (t, n) {
                    if (n == null) {
                        return t._.transform;
                    }
                    n = g(n)
                        .replace(/\.{3}|\u2026/g, t._.transform || v);
                    var r = e.parseTransformString(n),
                        i = 0,
                        s = 0,
                        o = 0,
                        u = 1,
                        a = 1,
                        f = t._,
                        l = new tn;
                    f.transform = r || [];
                    if (r) {
                        for (var c = 0, h = r.length; c < h; c++) {
                            var p = r[c],
                                d = p.length,
                                m = g(p[0])
                                    .toLowerCase(),
                                y = p[0] != m,
                                b = y ? l.invert() : 0,
                                w, E, S, x, T;
                            m == "t" && d == 3 ? y ? (w = b.x(0, 0), E = b.y(0, 0), S = b.x(p[1], p[2]), x = b.y(p[1], p[2]), l.translate(S - w, x - E)) : l.translate(p[1], p[2]) : m == "r" ? d == 2 ? (T = T || t.getBBox(1), l.rotate(p[1], T.x + T.width / 2, T.y + T.height / 2), i += p[1]) : d == 4 && (y ? (S = b.x(p[2], p[3]), x = b.y(p[2], p[3]), l.rotate(p[1], S, x)) : l.rotate(p[1], p[2], p[3]), i += p[1]) : m == "s" ? d == 2 || d == 3 ? (T = T || t.getBBox(1), l.scale(p[1], p[d - 1], T.x + T.width / 2, T.y + T.height / 2), u *= p[1], a *= p[d - 1]) : d == 5 && (y ? (S = b.x(p[3], p[4]), x = b.y(p[3], p[4]), l.scale(p[1], p[2], S, x)) : l.scale(p[1], p[2], p[3], p[4]), u *= p[1], a *= p[2]) : m == "m" && d == 7 && l.add(p[1], p[2], p[3], p[4], p[5], p[6]), f.dirtyT = 1, t.matrix = l;
                        }
                    }
                    t.matrix = l, f.sx = u, f.sy = a, f.deg = i, f.dx = s = l.e, f.dy = o = l.f, u == 1 && a == 1 && !i && f.bbox ? (f.bbox.x += +s, f.bbox.y += +o) : (f.dirtyT = 1);
                }, Zt = function (e) {
                    var t = e[0];
                    switch (t.toLowerCase()) {
                    case "t":
                        return [t, 0, 0];
                    case "m":
                        return [t, 1, 0, 0, 1, 0, 0];
                    case "r":
                        return e.length == 4 ? [t, 0, e[2], e[3]] : [t, 0];
                    case "s":
                        return e.length == 5 ? [t, 1, 1, e[3], e[4]] : e.length == 3 ? [t, 1, 1] : [t, 1];
                    default:
                        ;
                    }
                }, en = e._equaliseTransform = function (t, n) {
                    n = g(n)
                        .replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], n = e.parseTransformString(n) || [];
                    var r = x(t.length, n.length),
                        i = [],
                        s = [],
                        o = 0,
                        u, a, f, l;
                    for (; o < r; o++) {
                        f = t[o] || Zt(n[o]), l = n[o] || Zt(f);
                        if (f[0] != l[0] || f[0].toLowerCase() == "r" && (f[2] != l[2] || f[3] != l[3]) || f[0].toLowerCase() == "s" && (f[3] != l[3] || f[4] != l[4])) {
                            return;
                        }
                        i[o] = [], s[o] = [];
                        for (u = 0, a = x(f.length, l.length); u < a; u++) {
                            u in f && (i[o][u] = f[u]), u in l && (s[o][u] = l[u]);
                        }
                    }
                    return {
                        from: i,
                        to: s
                    };
                };
            e._getContainer = function (t, n, r, i) {
                var s;
                s = i == null && !e.is(t, "object") ? u.doc.getElementById(t) : t;
                if (s == null) {
                    return;
                }
                return s.tagName ? n == null ? {
                    container: s,
                    width: s.style.pixelWidth || s.offsetWidth,
                    height: s.style.pixelHeight || s.offsetHeight
                } : {
                    container: s,
                    width: n,
                    height: r
                } : {
                    container: 1,
                    x: t,
                    y: n,
                    width: r,
                    height: i
                };
            }, e.pathToRelative = Bt, e._engine = {}, e.path2curve = zt, e.matrix = function (e, t, n, r, i, s) {
                return new tn(e, t, n, r, i, s);
            }, (function (t) {
                function n(e) {
                    return e[0] * e[0] + e[1] * e[1];
                }

                function r(e) {
                    var t = S.sqrt(n(e));
                    e[0] && (e[0] /= t), e[1] && (e[1] /= t);
                }
                t.add = function (e, t, n, r, i, s) {
                    var o = [[], [], []],
                        u = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                        a = [[e, n, i], [t, r, s], [0, 0, 1]],
                        f, l, c, h;
                    e && e instanceof tn && (a = [[e.a, e.c, e.e], [e.b, e.d, e.f], [0, 0, 1]]);
                    for (f = 0; f < 3; f++) {
                        for (l = 0; l < 3; l++) {
                            h = 0;
                            for (c = 0; c < 3; c++) {
                                h += u[f][c] * a[c][l];
                            }
                            o[f][l] = h;
                        }
                    }
                    this.a = o[0][0], this.b = o[1][0], this.c = o[0][1], this.d = o[1][1], this.e = o[0][2], this.f = o[1][2];
                }, t.invert = function () {
                    var e = this,
                        t = e.a * e.d - e.b * e.c;
                    return new tn(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t);
                }, t.clone = function () {
                    return new tn(this.a, this.b, this.c, this.d, this.e, this.f);
                }, t.translate = function (e, t) {
                    this.add(1, 0, 0, 1, e, t);
                }, t.scale = function (e, t, n, r) {
                    t == null && (t = e), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(e, 0, 0, t, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r);
                }, t.rotate = function (t, n, r) {
                    t = e.rad(t), n = n || 0, r = r || 0;
                    var i = +S.cos(t)
                        .toFixed(9),
                        s = +S.sin(t)
                            .toFixed(9);
                    this.add(i, s, -s, i, n, r), this.add(1, 0, 0, 1, -n, -r);
                }, t.x = function (e, t) {
                    return e * this.a + t * this.c + this.e;
                }, t.y = function (e, t) {
                    return e * this.b + t * this.d + this.f;
                }, t.get = function (e) {
                    return +this[g.fromCharCode(97 + e)].toFixed(4);
                }, t.toString = function () {
                    return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
                }, t.toFilter = function () {
                    return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
                }, t.offset = function () {
                    return [this.e.toFixed(4), this.f.toFixed(4)];
                }, t.split = function () {
                    var t = {};
                    t.dx = this.e, t.dy = this.f;
                    var i = [[this.a, this.c], [this.b, this.d]];
                    t.scalex = S.sqrt(n(i[0])), r(i[0]), t.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1], i[1] = [i[1][0] - i[0][0] * t.shear, i[1][1] - i[0][1] * t.shear], t.scaley = S.sqrt(n(i[1])), r(i[1]), t.shear /= t.scaley;
                    var s = -i[0][1],
                        o = i[1][1];
                    return o < 0 ? (t.rotate = e.deg(S.acos(o)), s < 0 && (t.rotate = 360 - t.rotate)) : (t.rotate = e.deg(S.asin(s))), t.isSimple = !+t.shear.toFixed(9) && (t.scalex.toFixed(9) == t.scaley.toFixed(9) || !t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t;
                }, t.toTransformString = function (e) {
                    var t = e || this[y]();
                    return t.isSimple ? (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [t.dx, t.dy] : v) + (t.scalex != 1 || t.scaley != 1 ? "s" + [t.scalex, t.scaley, 0, 0] : v) + (t.rotate ? "r" + [t.rotate, 0, 0] : v)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
                };
            })(tn.prototype);
            var nn = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
            navigator.vendor == "Apple Computer, Inc." && (nn && nn[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && nn && nn[1] < 8 ? (l.safari = function () {
                var e = this.rect(-99, -99, this.width + 99, this.height + 99)
                    .attr({
                        stroke: "none"
                    });
                setTimeout(function () {
                    e.remove();
                });
            }) : (l.safari = it);
            var rn = function () {
                this.returnValue = false;
            }, sn = function () {
                    return this.originalEvent.preventDefault();
                }, on = function () {
                    this.cancelBubble = true;
                }, un = function () {
                    return this.originalEvent.stopPropagation();
                }, an = (function () {
                    if (u.doc.addEventListener) {
                        return function (e, t, n, r) {
                            var i = d && w[t] ? w[t] : t,
                                s = function (i) {
                                    var s = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                                        a = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                                        f = i.clientX + a,
                                        l = i.clientY + s;
                                    if (d && w[o](t)) {
                                        for (var c = 0, h = i.targetTouches && i.targetTouches.length; c < h; c++) {
                                            if (i.targetTouches[c].target == e) {
                                                var p = i;
                                                i = i.targetTouches[c], i.originalEvent = p, i.preventDefault = sn, i.stopPropagation = un;
                                                break;
                                            }
                                        }
                                    }
                                    return n.call(r, i, f, l);
                                };
                            return e.addEventListener(i, s, false),
                            function () {
                                return e.removeEventListener(i, s, false), true;
                            };
                        };
                    }
                    if (u.doc.attachEvent) {
                        return function (e, t, n, r) {
                            var i = function (e) {
                                e = e || u.win.event;
                                var t = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                                    i = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                                    s = e.clientX + i,
                                    o = e.clientY + t;
                                return e.preventDefault = e.preventDefault || rn, e.stopPropagation = e.stopPropagation || on, n.call(r, e, s, o);
                            };
                            e.attachEvent("on" + t, i);
                            var s = function () {
                                return e.detachEvent("on" + t, i), true;
                            };
                            return s;
                        };
                    }
                })(),
                fn = [],
                ln = function (e) {
                    var t = e.clientX,
                        n = e.clientY,
                        r = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                        i = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft,
                        s, o = fn.length;
                    while (o--) {
                        s = fn[o];
                        if (d) {
                            var a = e.touches.length,
                                f;
                            while (a--) {
                                f = e.touches[a];
                                if (f.identifier == s.el._drag.id) {
                                    t = f.clientX, n = f.clientY, (e.originalEvent ? e.originalEvent : e)
                                        .preventDefault();
                                    break;
                                }
                            }
                        } else {
                            e.preventDefault();
                        }
                        var l = s.el.node,
                            c, h = l.nextSibling,
                            p = l.parentNode,
                            v = l.style.display;
                        u.win.opera && p.removeChild(l), l.style.display = "none", c = s.el.paper.getElementByPoint(t, n), l.style.display = v, u.win.opera && (h ? p.insertBefore(l, h) : p.appendChild(l)), c && eve("raphael.drag.over." + s.el.id, s.el, c), t += i, n += r, eve("raphael.drag.move." + s.el.id, s.move_scope || s.el, t - s.el._drag.x, n - s.el._drag.y, t, n, e);
                    }
                }, cn = function (t) {
                    e.unmousemove(ln)
                        .unmouseup(cn);
                    var n = fn.length,
                        r;
                    while (n--) {
                        r = fn[n], r.el._drag = {}, eve("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, t);
                    }
                    fn = [];
                }, hn = e.el = {};
            for (var pn = b.length; pn--;) {
                (function (t) {
                    e[t] = hn[t] = function (n, r) {
                        return e.is(n, "function") && (this.events = this.events || [], this.events.push({
                            name: t,
                            f: n,
                            unbind: an(this.shape || this.node || u.doc, t, n, r || this)
                        })), this;
                    }, e["un" + t] = hn["un" + t] = function (e) {
                        var n = this.events || [],
                            r = n.length;
                        while (r--) {
                            if (n[r].name == t && n[r].f == e) {
                                return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                            }
                        }
                        return this;
                    };
                })(b[pn]);
            }
            hn.data = function (t, n) {
                var r = tt[this.id] = tt[this.id] || {};
                if (arguments.length == 1) {
                    if (e.is(t, "object")) {
                        for (var i in t) {
                            t[o](i) && this.data(i, t[i]);
                        }
                        return this;
                    }
                    return eve("raphael.data.get." + this.id, this, r[t], t), r[t];
                }
                return r[t] = n, eve("raphael.data.set." + this.id, this, n, t), this;
            }, hn.removeData = function (e) {
                return e == null ? (tt[this.id] = {}) : tt[this.id] && delete tt[this.id][e], this;
            }, hn.hover = function (e, t, n, r) {
                return this.mouseover(e, n)
                    .mouseout(t, r || n);
            }, hn.unhover = function (e, t) {
                return this.unmouseover(e)
                    .unmouseout(t);
            };
            var dn = [];
            hn.drag = function (t, n, r, i, s, o) {
                function a(a) {
                    (a.originalEvent || a)
                        .preventDefault();
                    var f = u.doc.documentElement.scrollTop || u.doc.body.scrollTop,
                        l = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft;
                    this._drag.x = a.clientX + l, this._drag.y = a.clientY + f, this._drag.id = a.identifier, !fn.length && e.mousemove(ln)
                        .mouseup(cn), fn.push({
                            el: this,
                            move_scope: i,
                            start_scope: s,
                            end_scope: o
                        }), n && eve.on("raphael.drag.start." + this.id, n), t && eve.on("raphael.drag.move." + this.id, t), r && eve.on("raphael.drag.end." + this.id, r), eve("raphael.drag.start." + this.id, s || i || this, a.clientX + l, a.clientY + f, a);
                }
                return this._drag = {}, dn.push({
                    el: this,
                    start: a
                }), this.mousedown(a), this;
            }, hn.onDragOver = function (e) {
                e ? eve.on("raphael.drag.over." + this.id, e) : eve.unbind("raphael.drag.over." + this.id);
            }, hn.undrag = function () {
                var t = dn.length;
                while (t--) {
                    dn[t].el == this && (this.unmousedown(dn[t].start), dn.splice(t, 1), eve.unbind("raphael.drag.*." + this.id));
                }!dn.length && e.unmousemove(ln)
                    .unmouseup(cn);
            }, l.circle = function (t, n, r) {
                var i = e._engine.circle(this, t || 0, n || 0, r || 0);
                return this.__set__ && this.__set__.push(i), i;
            }, l.rect = function (t, n, r, i, s) {
                var o = e._engine.rect(this, t || 0, n || 0, r || 0, i || 0, s || 0);
                return this.__set__ && this.__set__.push(o), o;
            }, l.ellipse = function (t, n, r, i) {
                var s = e._engine.ellipse(this, t || 0, n || 0, r || 0, i || 0);
                return this.__set__ && this.__set__.push(s), s;
            }, l.path = function (t) {
                t && !e.is(t, A) && !e.is(t[0], O) && (t += v);
                var n = e._engine.path(e.format[h](e, arguments), this);
                return this.__set__ && this.__set__.push(n), n;
            }, l.image = function (t, n, r, i, s) {
                var o = e._engine.image(this, t || "about:blank", n || 0, r || 0, i || 0, s || 0);
                return this.__set__ && this.__set__.push(o), o;
            }, l.text = function (t, n, r) {
                var i = e._engine.text(this, t || 0, n || 0, g(r));
                return this.__set__ && this.__set__.push(i), i;
            }, l.set = function (t) {
                !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
                var n = new Dn(t);
                return this.__set__ && this.__set__.push(n), n;
            }, l.setStart = function (e) {
                this.__set__ = e || this.set();
            }, l.setFinish = function (e) {
                var t = this.__set__;
                return delete this.__set__, t;
            }, l.setSize = function (t, n) {
                return e._engine.setSize.call(this, t, n);
            }, l.setViewBox = function (t, n, r, i, s) {
                return e._engine.setViewBox.call(this, t, n, r, i, s);
            }, l.top = l.bottom = null, l.raphael = e;
            var vn = function (e) {
                var t = e.getBoundingClientRect(),
                    n = e.ownerDocument,
                    r = n.body,
                    i = n.documentElement,
                    s = i.clientTop || r.clientTop || 0,
                    o = i.clientLeft || r.clientLeft || 0,
                    a = t.top + (u.win.pageYOffset || i.scrollTop || r.scrollTop) - s,
                    f = t.left + (u.win.pageXOffset || i.scrollLeft || r.scrollLeft) - o;
                return {
                    y: a,
                    x: f
                };
            };
            l.getElementByPoint = function (e, t) {
                var n = this,
                    r = n.canvas,
                    i = u.doc.elementFromPoint(e, t);
                if (u.win.opera && i.tagName == "svg") {
                    var s = vn(r),
                        o = r.createSVGRect();
                    o.x = e - s.x, o.y = t - s.y, o.width = o.height = 1;
                    var a = r.getIntersectionList(o, null);
                    a.length && (i = a[a.length - 1]);
                }
                if (!i) {
                    return null;
                }
                while (i.parentNode && i != r.parentNode && !i.raphael) {
                    i = i.parentNode;
                }
                return i == n.canvas.parentNode && (i = r), i = i && i.raphael ? n.getById(i.raphaelid) : null, i;
            }, l.getById = function (e) {
                var t = this.bottom;
                while (t) {
                    if (t.id == e) {
                        return t;
                    }
                    t = t.next;
                }
                return null;
            }, l.forEach = function (e, t) {
                var n = this.bottom;
                while (n) {
                    if (e.call(t, n) === false) {
                        return this;
                    }
                    n = n.next;
                }
                return this;
            }, l.getElementsByPoint = function (e, t) {
                var n = this.set();
                return this.forEach(function (r) {
                    r.isPointInside(e, t) && n.push(r);
                }), n;
            }, hn.isPointInside = function (t, n) {
                var r = this.realPath = this.realPath || at[this.type](this);
                return e.isPointInsidePath(r, t, n);
            }, hn.getBBox = function (e) {
                if (this.removed) {
                    return {};
                }
                var t = this._;
                if (e) {
                    if (t.dirty || !t.bboxwt) {
                        this.realPath = at[this.type](this), t.bboxwt = Pt(this.realPath), t.bboxwt.toString = gn, t.dirty = 0;
                    }
                    return t.bboxwt;
                }
                if (t.dirty || t.dirtyT || !t.bbox) {
                    if (t.dirty || !this.realPath) {
                        t.bboxwt = 0, this.realPath = at[this.type](this);
                    }
                    t.bbox = Pt(ft(this.realPath, this.matrix)), t.bbox.toString = gn, t.dirty = t.dirtyT = 0;
                }
                return t.bbox;
            }, hn.clone = function () {
                if (this.removed) {
                    return null;
                }
                var e = this.paper[this.type]()
                    .attr(this.attr());
                return this.__set__ && this.__set__.push(e), e;
            }, hn.glow = function (e) {
                if (this.type == "text") {
                    return null;
                }
                e = e || {};
                var t = {
                    width: (e.width || 10) + (+this.attr("stroke-width") || 1),
                    fill: e.fill || false,
                    opacity: e.opacity || 0.5,
                    offsetx: e.offsetx || 0,
                    offsety: e.offsety || 0,
                    color: e.color || "#000"
                }, n = t.width / 2,
                    r = this.paper,
                    i = r.set(),
                    s = this.realPath || at[this.type](this);
                s = this.matrix ? ft(s, this.matrix) : s;
                for (var o = 1; o < n + 1; o++) {
                    i.push(r.path(s)
                        .attr({
                            stroke: t.color,
                            fill: t.fill ? t.color : "none",
                            'stroke-linejoin': "round",
                            'stroke-linecap': "round",
                            'stroke-width': +(t.width / n * o)
                                .toFixed(3),
                            opacity: +(t.opacity / n)
                                .toFixed(3)
                        }));
                }
                return i.insertBefore(this)
                    .translate(t.offsetx, t.offsety);
            };
            var yn = {}, bn = function (t, n, r, i, s, o, u, a, f) {
                    return f == null ? kt(t, n, r, i, s, o, u, a) : e.findDotsAtSegment(t, n, r, i, s, o, u, a, Lt(t, n, r, i, s, o, u, a, f));
                }, wn = function (t, n) {
                    return function (r, i, s) {
                        r = zt(r);
                        var o, u, a, f, l = "",
                            c = {}, h, p = 0;
                        for (var d = 0, v = r.length; d < v; d++) {
                            a = r[d];
                            if (a[0] == "M") {
                                o = +a[1], u = +a[2];
                            } else {
                                f = bn(o, u, a[1], a[2], a[3], a[4], a[5], a[6]);
                                if (p + f > i) {
                                    if (n && !c.start) {
                                        h = bn(o, u, a[1], a[2], a[3], a[4], a[5], a[6], i - p), l += ["C" + h.start.x, h.start.y, h.m.x, h.m.y, h.x, h.y];
                                        if (s) {
                                            return l;
                                        }
                                        c.start = l, l = ["M" + h.x, h.y + "C" + h.n.x, h.n.y, h.end.x, h.end.y, a[5], a[6]].join(), p += f, o = +a[5], u = +a[6];
                                        continue;
                                    }
                                    if (!t && !n) {
                                        return h = bn(o, u, a[1], a[2], a[3], a[4], a[5], a[6], i - p), {
                                            x: h.x,
                                            y: h.y,
                                            alpha: h.alpha
                                        };
                                    }
                                }
                                p += f, o = +a[5], u = +a[6];
                            }
                            l += a.shift() + a;
                        }
                        return c.end = l, h = t ? p : n ? c : e.findDotsAtSegment(o, u, a[0], a[1], a[2], a[3], a[4], a[5], 1), h.alpha && (h = {
                            x: h.x,
                            y: h.y,
                            alpha: h.alpha
                        }), h;
                    };
                }, En = wn(1),
                Sn = wn(),
                xn = wn(0, 1);
            e.getTotalLength = En, e.getPointAtLength = Sn, e.getSubpath = function (e, t, n) {
                if (this.getTotalLength(e) - n < 0.000001) {
                    return xn(e, t)
                        .end;
                }
                var r = xn(e, n, 1);
                return t ? xn(r, t)
                    .end : r;
            }, hn.getTotalLength = function () {
                if (this.type != "path") {
                    return;
                }
                return this.node.getTotalLength ? this.node.getTotalLength() : En(this.attrs.path);
            }, hn.getPointAtLength = function (e) {
                if (this.type != "path") {
                    return;
                }
                return Sn(this.attrs.path, e);
            }, hn.getSubpath = function (t, n) {
                if (this.type != "path") {
                    return;
                }
                return e.getSubpath(this.attrs.path, t, n);
            };
            var Tn = e.easing_formulas = {
                linear: function (e) {
                    return e;
                },
                '<': function (e) {
                    return C(e, 1.7);
                },
                '>': function (e) {
                    return C(e, 0.48);
                },
                '<>': function (e) {
                    var t = 0.48 - e / 1.04,
                        n = S.sqrt(0.1734 + t * t),
                        r = n - t,
                        i = C(N(r), 0.3333333333333333) * (r < 0 ? -1 : 1),
                        s = -n - t,
                        o = C(N(s), 0.3333333333333333) * (s < 0 ? -1 : 1),
                        u = i + o + 0.5;
                    return (1 - u) * 3 * u * u + u * u * u;
                },
                backIn: function (e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t);
                },
                backOut: function (e) {
                    e -= 1;
                    var t = 1.70158;
                    return e * e * ((t + 1) * e + t) + 1;
                },
                elastic: function (e) {
                    return e == !! e ? e : C(2, -10 * e) * S.sin((e - 0.075) * 2 * k / 0.3) + 1;
                },
                bounce: function (e) {
                    var t = 7.5625,
                        n = 2.75,
                        r;
                    return e < 1 / n ? (r = t * e * e) : e < 2 / n ? (e -= 1.5 / n, r = t * e * e + 0.75) : e < 2.5 / n ? (e -= 2.25 / n, r = t * e * e + 0.9375) : (e -= 2.625 / n, r = t * e * e + 0.984375), r;
                }
            };
            Tn.easeIn = Tn['ease-in'] = Tn['<'], Tn.easeOut = Tn['ease-out'] = Tn['>'], Tn.easeInOut = Tn['ease-in-out'] = Tn['<>'], Tn['back-in'] = Tn.backIn, Tn['back-out'] = Tn.backOut;
            var Nn = [],
                Cn = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                    setTimeout(e, 16);
                }, kn = function () {
                    var t = +new Date,
                        n = 0;
                    for (; n < Nn.length; n++) {
                        var r = Nn[n];
                        if (r.el.removed || r.paused) {
                            continue;
                        }
                        var i = t - r.start,
                            s = r.ms,
                            u = r.easing,
                            a = r.from,
                            f = r.diff,
                            l = r.to,
                            c = r.t,
                            h = r.el,
                            d = {}, v, g = {}, y;
                        r.initstatus ? (i = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * s, r.status = r.initstatus, delete r.initstatus, r.stop && Nn.splice(n--, 1)) : (r.status = (r.prev + (r.percent - r.prev) * (i / s)) / r.anim.top);
                        if (i < 0) {
                            continue;
                        }
                        if (i < s) {
                            var b = u(i / s);
                            for (var w in a) {
                                if (a[o](w)) {
                                    switch (V[w]) {
                                    case L:
                                        v = +a[w] + b * s * f[w];
                                        break;
                                    case "colour":
                                        v = "rgb(" + [Ln(q(a[w].r + b * s * f[w].r)), Ln(q(a[w].g + b * s * f[w].g)), Ln(q(a[w].b + b * s * f[w].b))].join(",") + ")";
                                        break;
                                    case "path":
                                        v = [];
                                        for (var E = 0, S = a[w].length; E < S; E++) {
                                            v[E] = [a[w][E][0]];
                                            for (var x = 1, T = a[w][E].length; x < T; x++) {
                                                v[E][x] = +a[w][E][x] + b * s * f[w][E][x];
                                            }
                                            v[E] = v[E].join(m);
                                        }
                                        v = v.join(m);
                                        break;
                                    case "transform":
                                        if (f[w].real) {
                                            v = [];
                                            for (E = 0, S = a[w].length; E < S; E++) {
                                                v[E] = [a[w][E][0]];
                                                for (x = 1, T = a[w][E].length; x < T; x++) {
                                                    v[E][x] = a[w][E][x] + b * s * f[w][E][x];
                                                }
                                            }
                                        } else {
                                            var N = function (e) {
                                                return +a[w][e] + b * s * f[w][e];
                                            };
                                            v = [["m", N(0), N(1), N(2), N(3), N(4), N(5)]];
                                        }
                                        break;
                                    case "csv":
                                        if (w == "clip-rect") {
                                            v = [], E = 4;
                                            while (E--) {
                                                v[E] = +a[w][E] + b * s * f[w][E];
                                            }
                                        }
                                        break;
                                    default:
                                        var C = [][p](a[w]);
                                        v = [], E = h.paper.customAttributes[w].length;
                                        while (E--) {
                                            v[E] = +C[E] + b * s * f[w][E];
                                        }
                                    }
                                    d[w] = v;
                                }
                            }
                            h.attr(d), (function (e, t, n) {
                                setTimeout(function () {
                                    eve("raphael.anim.frame." + e, t, n);
                                });
                            })(h.id, h, r.anim);
                        } else {
                            (function (t, n, r) {
                                setTimeout(function () {
                                    eve("raphael.anim.frame." + n.id, n, r), eve("raphael.anim.finish." + n.id, n, r), e.is(t, "function") && t.call(n);
                                });
                            })(r.callback, h, r.anim), h.attr(l), Nn.splice(n--, 1);
                            if (r.repeat > 1 && !r.next) {
                                for (y in l) {
                                    l[o](y) && (g[y] = r.totalOrigin[y]);
                                }
                                r.el.attr(g), Mn(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1);
                            }
                            r.next && !r.stop && Mn(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat);
                        }
                    }
                    e.svg && h && h.paper && h.paper.safari(), Nn.length && Cn(kn);
                }, Ln = function (e) {
                    return e > 255 ? 255 : e < 0 ? 0 : e;
                };
            hn.animateWith = function (t, n, r, i, s, o) {
                var u = this;
                if (u.removed) {
                    return o && o.call(u), u;
                }
                var a = r instanceof On ? r : e.animation(r, i, s, o),
                    f, l;
                Mn(a, u, a.percents[0], null, u.attr());
                for (var c = 0, h = Nn.length; c < h; c++) {
                    if (Nn[c].anim == n && Nn[c].el == t) {
                        Nn[h - 1].start = Nn[c].start;
                        break;
                    }
                }
                return u;
            }, hn.onAnimation = function (e) {
                return e ? eve.on("raphael.anim.frame." + this.id, e) : eve.unbind("raphael.anim.frame." + this.id), this;
            }, On.prototype.delay = function (e) {
                var t = new On(this.anim, this.ms);
                return t.times = this.times, t.del = +e || 0, t;
            }, On.prototype.repeat = function (e) {
                var t = new On(this.anim, this.ms);
                return t.del = this.del, t.times = S.floor(x(e, 0)) || 1, t;
            }, e.animation = function (t, n, r, i) {
                if (t instanceof On) {
                    return t;
                }
                if (e.is(r, "function") || !r) {
                    i = i || r || null, r = null;
                }
                t = Object(t), n = +n || 0;
                var s = {}, u, a;
                for (a in t) {
                    t[o](a) && U(a) != a && U(a) + "%" != a && (u = true, s[a] = t[a]);
                }
                return u ? (r && (s.easing = r), i && (s.callback = i), new On({
                    100: s
                }, n)) : new On(t, n);
            }, hn.animate = function (t, n, r, i) {
                var s = this;
                if (s.removed) {
                    return i && i.call(s), s;
                }
                var o = t instanceof On ? t : e.animation(t, n, r, i);
                return Mn(o, s, o.percents[0], null, s.attr()), s;
            }, hn.setTime = function (e, t) {
                return e && t != null && this.status(e, T(t, e.ms) / e.ms), this;
            }, hn.status = function (e, t) {
                var n = [],
                    r = 0,
                    i, s;
                if (t != null) {
                    return Mn(e, this, -1, T(t, 1)), this;
                }
                i = Nn.length;
                for (; r < i; r++) {
                    s = Nn[r];
                    if (s.el.id == this.id && (!e || s.anim == e)) {
                        if (e) {
                            return s.status;
                        }
                        n.push({
                            anim: s.anim,
                            status: s.status
                        });
                    }
                }
                return e ? 0 : n;
            }, hn.pause = function (e) {
                for (var t = 0; t < Nn.length; t++) {
                    Nn[t].el.id == this.id && (!e || Nn[t].anim == e) && eve("raphael.anim.pause." + this.id, this, Nn[t].anim) !== false && (Nn[t].paused = true);
                }
                return this;
            }, hn.resume = function (e) {
                for (var t = 0; t < Nn.length; t++) {
                    if (Nn[t].el.id == this.id && (!e || Nn[t].anim == e)) {
                        var n = Nn[t];
                        eve("raphael.anim.resume." + this.id, this, n.anim) !== false && (delete n.paused, this.status(n.anim, n.status));
                    }
                }
                return this;
            }, hn.stop = function (e) {
                for (var t = 0; t < Nn.length; t++) {
                    Nn[t].el.id == this.id && (!e || Nn[t].anim == e) && eve("raphael.anim.stop." + this.id, this, Nn[t].anim) !== false && Nn.splice(t--, 1);
                }
                return this;
            }, eve.on("raphael.remove", _n), eve.on("raphael.clear", _n), hn.toString = function () {
                return "Rapha\xEBl\x92s object";
            };
            var Dn = function (e) {
                this.items = [], this.length = 0, this.type = "set";
                if (e) {
                    for (var t = 0, n = e.length; t < n; t++) {
                        e[t] && (e[t].constructor == hn.constructor || e[t].constructor == Dn) && (this[this.items.length] = this.items[this.items.length] = e[t], this.length++);
                    }
                }
            }, Pn = Dn.prototype;
            Pn.push = function () {
                var e, t;
                for (var n = 0, r = arguments.length; n < r; n++) {
                    e = arguments[n], e && (e.constructor == hn.constructor || e.constructor == Dn) && (t = this.items.length, this[t] = this.items[t] = e, this.length++);
                }
                return this;
            }, Pn.pop = function () {
                return this.length && delete this[this.length--], this.items.pop();
            }, Pn.forEach = function (e, t) {
                for (var n = 0, r = this.items.length; n < r; n++) {
                    if (e.call(t, this.items[n], n) === false) {
                        return this;
                    }
                }
                return this;
            };
            for (var Hn in hn) {
                hn[o](Hn) && (Pn[Hn] = (function (e) {
                    return function () {
                        var t = arguments;
                        return this.forEach(function (n) {
                            n[e][h](n, t);
                        });
                    };
                })(Hn));
            }
            Pn.attr = function (t, n) {
                if (t && e.is(t, O) && e.is(t[0], "object")) {
                    for (var r = 0, i = t.length; r < i; r++) {
                        this.items[r].attr(t[r]);
                    }
                } else {
                    for (var s = 0, o = this.items.length; s < o; s++) {
                        this.items[s].attr(t, n);
                    }
                }
                return this;
            }, Pn.clear = function () {
                while (this.length) {
                    this.pop();
                }
            }, Pn.splice = function (e, t, n) {
                e = e < 0 ? x(this.length + e, 0) : e, t = x(0, T(this.length - e, t));
                var r = [],
                    i = [],
                    s = [],
                    o;
                for (o = 2; o < arguments.length; o++) {
                    s.push(arguments[o]);
                }
                for (o = 0; o < t; o++) {
                    i.push(this[e + o]);
                }
                for (; o < this.length - e; o++) {
                    r.push(this[e + o]);
                }
                var u = s.length;
                for (o = 0; o < u + r.length; o++) {
                    this.items[e + o] = this[e + o] = o < u ? s[o] : r[o - u];
                }
                o = this.items.length = this.length -= t - u;
                while (this[o]) {
                    delete this[o++];
                }
                return new Dn(i);
            }, Pn.exclude = function (e) {
                for (var t = 0, n = this.length; t < n; t++) {
                    if (this[t] == e) {
                        return this.splice(t, 1), true;
                    }
                }
            }, Pn.animate = function (t, n, r, i) {
                (e.is(r, "function") || !r) && (i = r || null);
                var s = this.items.length,
                    o = s,
                    u, a = this,
                    f;
                if (!s) {
                    return this;
                }
                i && (f = function () {
                    !--s && i.call(a);
                }), r = e.is(r, A) ? r : f;
                var l = e.animation(t, n, r, f);
                u = this.items[--o].animate(l);
                while (o--) {
                    this.items[o] && !this.items[o].removed && this.items[o].animateWith(u, l, l);
                }
                return this;
            }, Pn.insertAfter = function (e) {
                var t = this.items.length;
                while (t--) {
                    this.items[t].insertAfter(e);
                }
                return this;
            }, Pn.getBBox = function () {
                var e = [],
                    t = [],
                    n = [],
                    r = [];
                for (var i = this.items.length; i--;) {
                    if (!this.items[i].removed) {
                        var s = this.items[i].getBBox();
                        e.push(s.x), t.push(s.y), n.push(s.x + s.width), r.push(s.y + s.height);
                    }
                }
                return e = T[h](0, e), t = T[h](0, t), n = x[h](0, n), r = x[h](0, r), {
                    x: e,
                    y: t,
                    x2: n,
                    y2: r,
                    width: n - e,
                    height: r - t
                };
            }, Pn.clone = function (e) {
                e = new Dn;
                for (var t = 0, n = this.items.length; t < n; t++) {
                    e.push(this.items[t].clone());
                }
                return e;
            }, Pn.toString = function () {
                return "Rapha\xEBl\x91s set";
            }, e.registerFont = function (e) {
                if (!e.face) {
                    return e;
                }
                this.fonts = this.fonts || {};
                var t = {
                    w: e.w,
                    face: {},
                    glyphs: {}
                }, n = e.face['font-family'];
                for (var r in e.face) {
                    e.face[o](r) && (t.face[r] = e.face[r]);
                }
                this.fonts[n] ? this.fonts[n].push(t) : (this.fonts[n] = [t]);
                if (!e.svg) {
                    t.face['units-per-em'] = z(e.face['units-per-em'], 10);
                    for (var i in e.glyphs) {
                        if (e.glyphs[o](i)) {
                            var s = e.glyphs[i];
                            t.glyphs[i] = {
                                w: s.w,
                                k: {},
                                d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function (e) {
                                    return {
                                        l: "L",
                                        c: "C",
                                        x: "z",
                                        t: "m",
                                        r: "l",
                                        v: "c"
                                    }[e] || "M";
                                }) + "z"
                            };
                            if (s.k) {
                                for (var u in s.k) {
                                    s[o](u) && (t.glyphs[i].k[u] = s.k[u]);
                                }
                            }
                        }
                    }
                }
                return e;
            }, l.getFont = function (t, n, r, i) {
                i = i || "normal", r = r || "normal", n = +n || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                }[n] || 400;
                if (!e.fonts) {
                    return;
                }
                var s = e.fonts[t];
                if (!s) {
                    var u = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, v) + "(\\s|$)", "i");
                    for (var a in e.fonts) {
                        if (e.fonts[o](a) && u.test(a)) {
                            s = e.fonts[a];
                            break;
                        }
                    }
                }
                var f;
                if (s) {
                    for (var l = 0, c = s.length; l < c; l++) {
                        f = s[l];
                        if (f.face['font-weight'] == n && (f.face['font-style'] == r || !f.face['font-style']) && f.face['font-stretch'] == i) {
                            break;
                        }
                    }
                }
                return f;
            }, l.print = function (t, r, i, s, o, u, a) {
                u = u || "middle", a = x(T(a || 0, 1), -1);
                var f = g(i)[y](v),
                    l = 0,
                    c = 0,
                    h = v,
                    p;
                e.is(s, i) && (s = this.getFont(s));
                if (s) {
                    p = (o || 16) / s.face['units-per-em'];
                    var d = s.face.bbox[y](n),
                        m = +d[0],
                        b = d[3] - d[1],
                        w = 0,
                        E = +d[1] + (u == "baseline" ? b + +s.face.descent : b / 2);
                    for (var S = 0, N = f.length; S < N; S++) {
                        if (f[S] == "\n") {
                            l = 0, k = 0, c = 0, w += b;
                        } else {
                            var C = c && s.glyphs[f[S - 1]] || {}, k = s.glyphs[f[S]];
                            l += c ? (C.w || s.w) + (C.k && C.k[f[S]] || 0) + s.w * a : 0, c = 1;
                        }
                        k && k.d && (h += e.transformPath(k.d, ["t", l * p, w * p, "s", p, p, m, E, "t", (t - m) / p, (r - E) / p]));
                    }
                }
                return this.path(h)
                    .attr({
                        fill: "#000",
                        stroke: "none"
                    });
            }, l.add = function (t) {
                if (e.is(t, "array")) {
                    var n = this.set(),
                        i = 0,
                        s = t.length,
                        u;
                    for (; i < s; i++) {
                        u = t[i] || {}, r[o](u.type) && n.push(this[u.type]()
                            .attr(u));
                    }
                }
                return n;
            }, e.format = function (t, n) {
                var r = e.is(n, O) ? [0][p](n) : arguments;
                return t && e.is(t, A) && r.length - 1 && (t = t.replace(i, function (e, t) {
                    return r[++t] == null ? v : r[t];
                })), t || v;
            }, e.fullfill = (function () {
                var e = /\{([^\}]+)\}/g,
                    t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    n = function (e, n, r) {
                        var i = r;
                        return n.replace(t, function (e, t, n, r, s) {
                            t = t || r, i && (t in i && (i = i[t]), typeof i == "function" && s && (i = i()));
                        }), i = (i == null || i == r ? e : i) + "", i;
                    };
                return function (t, r) {
                    return String(t)
                        .replace(e, function (e, t) {
                            return n(e, t, r);
                        });
                };
            })(), e.ninja = function () {
                return a.was ? (u.win.Raphael = a.is) : delete Raphael, e;
            }, e.st = Pn, (function (t, n, r) {
                function i() {
                    /in/.test(t.readyState) ? setTimeout(i, 9) : e.eve("raphael.DOMload");
                }
                t.readyState == null && t.addEventListener && (t.addEventListener(n, r = function () {
                    t.removeEventListener(n, r, false), t.readyState = "complete";
                }, false), t.readyState = "loading"), i();
            })(document, "DOMContentLoaded"), a.was ? (u.win.Raphael = e) : (Raphael = e), eve.on("raphael.DOMload", function () {
                t = true;
            });
        })(), window.Raphael.svg && (function (e) {
            var t = "hasOwnProperty",
                n = String,
                r = parseFloat,
                i = parseInt,
                s = Math,
                o = s.max,
                u = s.abs,
                a = s.pow,
                f = /[, ]+/,
                l = e.eve,
                c = "",
                h = " ",
                p = "http://www.w3.org/1999/xlink",
                d = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                }, v = {};
            e.toString = function () {
                return "Your browser supports SVG.\nYou are running Rapha\xEBl " + this.version;
            };
            var m = function (r, i) {
                if (i) {
                    typeof r == "string" && (r = m(r));
                    for (var s in i) {
                        i[t](s) && (s.substring(0, 6) == "xlink:" ? r.setAttributeNS(p, s.substring(6), n(i[s])) : r.setAttribute(s, n(i[s])));
                    }
                } else {
                    r = e._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                }
                return r;
            }, g = function (t, i) {
                    var f = "linear",
                        l = t.id + i,
                        h = 0.5,
                        p = 0.5,
                        d = t.node,
                        v = t.paper,
                        g = d.style,
                        y = e._g.doc.getElementById(l);
                    if (!y) {
                        i = n(i)
                            .replace(e._radial_gradient, function (e, t, n) {
                                f = "radial";
                                if (t && n) {
                                    h = r(t), p = r(n);
                                    var i = (p > 0.5) * 2 - 1;
                                    a(h - 0.5, 2) + a(p - 0.5, 2) > 0.25 && (p = s.sqrt(0.25 - a(h - 0.5, 2)) * i + 0.5) && p != 0.5 && (p = p.toFixed(5) - 0.00001 * i);
                                }
                                return c;
                            }), i = i.split(/\s*\-\s*/);
                        if (f == "linear") {
                            var b = i.shift();
                            b = -r(b);
                            if (isNaN(b)) {
                                return null;
                            }
                            var w = [0, 0, s.cos(e.rad(b)), s.sin(e.rad(b))],
                                E = 1 / (o(u(w[2]), u(w[3])) || 1);
                            w[2] *= E, w[3] *= E, w[2] < 0 && (w[0] = -w[2], w[2] = 0), w[3] < 0 && (w[1] = -w[3], w[3] = 0);
                        }
                        var S = e._parseDots(i);
                        if (!S) {
                            return null;
                        }
                        l = l.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && l != t.gradient.id && (v.defs.removeChild(t.gradient), delete t.gradient);
                        if (!t.gradient) {
                            y = m(f + "Gradient", {
                                id: l
                            }), t.gradient = y, m(y, f == "radial" ? {
                                fx: h,
                                fy: p
                            } : {
                                x1: w[0],
                                y1: w[1],
                                x2: w[2],
                                y2: w[3],
                                gradientTransform: t.matrix.invert()
                            }), v.defs.appendChild(y);
                            for (var x = 0, T = S.length; x < T; x++) {
                                y.appendChild(m("stop", {
                                    offset: S[x].offset ? S[x].offset : x ? "100%" : "0%",
                                    'stop-color': S[x].color || "#fff"
                                }));
                            }
                        }
                    }
                    return m(d, {
                        fill: "url(#" + l + ")",
                        opacity: 1,
                        'fill-opacity': 1
                    }), g.fill = c, g.opacity = 1, g.fillOpacity = 1, 1;
                }, y = function (e) {
                    var t = e.getBBox(1);
                    m(e.pattern, {
                        patternTransform: e.matrix.invert() + " translate(" + t.x + "," + t.y + ")"
                    });
                }, b = function (r, i, s) {
                    if (r.type == "path") {
                        var o = n(i)
                            .toLowerCase()
                            .split("-"),
                            u = r.paper,
                            a = s ? "end" : "start",
                            f = r.node,
                            l = r.attrs,
                            h = l['stroke-width'],
                            p = o.length,
                            g = "classic",
                            y, b, w, E, S, x = 3,
                            T = 3,
                            N = 5;
                        while (p--) {
                            switch (o[p]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                g = o[p];
                                break;
                            case "wide":
                                T = 5;
                                break;
                            case "narrow":
                                T = 2;
                                break;
                            case "long":
                                x = 5;
                                break;
                            case "short":
                                x = 2;
                            default:
                                ;
                            }
                        }
                        g == "open" ? (x += 2, T += 2, N += 2, w = 1, E = s ? 4 : 1, S = {
                            fill: "none",
                            stroke: l.stroke
                        }) : (E = w = x / 2, S = {
                            fill: l.stroke,
                            stroke: "none"
                        }), r._.arrows ? s ? (r._.arrows.endPath && v[r._.arrows.endPath]--, r._.arrows.endMarker && v[r._.arrows.endMarker]--) : (r._.arrows.startPath && v[r._.arrows.startPath]--, r._.arrows.startMarker && v[r._.arrows.startMarker]--) : (r._.arrows = {});
                        if (g != "none") {
                            var C = "raphael-marker-" + g,
                                k = "raphael-marker-" + a + g + x + T;
                            e._g.doc.getElementById(C) ? v[C]++ : (u.defs.appendChild(m(m("path"), {
                                'stroke-linecap': "round",
                                d: d[g],
                                id: C
                            })), v[C] = 1);
                            var L = e._g.doc.getElementById(k),
                                A;
                            L ? (v[k]++, A = L.getElementsByTagName("use")[0]) : (L = m(m("marker"), {
                                id: k,
                                markerHeight: T,
                                markerWidth: x,
                                orient: "auto",
                                refX: E,
                                refY: T / 2
                            }), A = m(m("use"), {
                                'xlink:href': "#" + C,
                                transform: (s ? "rotate(180 " + x / 2 + " " + T / 2 + ") " : c) + "scale(" + x / N + "," + T / N + ")",
                                'stroke-width': (1 / ((x / N + T / N) / 2))
                                    .toFixed(4)
                            }), L.appendChild(A), u.defs.appendChild(L), v[k] = 1), m(A, S);
                            var O = w * (g != "diamond" && g != "oval");
                            s ? (y = r._.arrows.startdx * h || 0, b = e.getTotalLength(l.path) - O * h) : (y = O * h, b = e.getTotalLength(l.path) - (r._.arrows.enddx * h || 0)), S = {}, S["marker-" + a] = "url(#" + k + ")";
                            if (b || y) {
                                S.d = Raphael.getSubpath(l.path, y, b);
                            }
                            m(f, S), r._.arrows[a + "Path"] = C, r._.arrows[a + "Marker"] = k, r._.arrows[a + "dx"] = O, r._.arrows[a + "Type"] = g, r._.arrows[a + "String"] = i;
                        } else {
                            s ? (y = r._.arrows.startdx * h || 0, b = e.getTotalLength(l.path) - y) : (y = 0, b = e.getTotalLength(l.path) - (r._.arrows.enddx * h || 0)), r._.arrows[a + "Path"] && m(f, {
                                d: Raphael.getSubpath(l.path, y, b)
                            }), delete r._.arrows[a + "Path"], delete r._.arrows[a + "Marker"], delete r._.arrows[a + "dx"], delete r._.arrows[a + "Type"], delete r._.arrows[a + "String"];
                        }
                        for (S in v) {
                            if (v[t](S) && !v[S]) {
                                var M = e._g.doc.getElementById(S);
                                M && M.parentNode.removeChild(M);
                            }
                        }
                    }
                }, w = {
                    '': [0],
                    none: [0],
                    '-': [3, 1],
                    '.': [1, 1],
                    '-.': [3, 1, 1, 1],
                    '-..': [3, 1, 1, 1, 1, 1],
                    '. ': [1, 3],
                    '- ': [4, 3],
                    '--': [8, 3],
                    '- .': [4, 3, 1, 3],
                    '--.': [8, 3, 1, 3],
                    '--..': [8, 3, 1, 3, 1, 3]
                }, E = function (e, t, r) {
                    t = w[n(t)
                        .toLowerCase()];
                    if (t) {
                        var i = e.attrs['stroke-width'] || "1",
                            s = {
                                round: i,
                                square: i,
                                butt: 0
                            }[e.attrs['stroke-linecap'] || r['stroke-linecap']] || 0,
                            o = [],
                            u = t.length;
                        while (u--) {
                            o[u] = t[u] * i + (u % 2 ? 1 : -1) * s;
                        }
                        m(e.node, {
                            'stroke-dasharray': o.join(",")
                        });
                    }
                }, S = function (r, s) {
                    var a = r.node,
                        l = r.attrs,
                        h = a.style.visibility;
                    a.style.visibility = "hidden";
                    for (var d in s) {
                        if (s[t](d)) {
                            if (!e._availableAttrs[t](d)) {
                                continue;
                            }
                            var v = s[d];
                            l[d] = v;
                            switch (d) {
                            case "blur":
                                r.blur(v);
                                break;
                            case "href":
                            case "title":
                            case "target":
                                var w = a.parentNode;
                                if (w.tagName.toLowerCase() != "a") {
                                    var S = m("a");
                                    w.insertBefore(S, a), S.appendChild(a), w = S;
                                }
                                d == "target" ? w.setAttributeNS(p, "show", v == "blank" ? "new" : v) : w.setAttributeNS(p, d, v);
                                break;
                            case "cursor":
                                a.style.cursor = v;
                                break;
                            case "transform":
                                r.transform(v);
                                break;
                            case "arrow-start":
                                b(r, v);
                                break;
                            case "arrow-end":
                                b(r, v, 1);
                                break;
                            case "clip-rect":
                                var x = n(v)
                                    .split(f);
                                if (x.length == 4) {
                                    r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                                    var N = m("clipPath"),
                                        C = m("rect");
                                    N.id = e.createUUID(), m(C, {
                                        x: x[0],
                                        y: x[1],
                                        width: x[2],
                                        height: x[3]
                                    }), N.appendChild(C), r.paper.defs.appendChild(N), m(a, {
                                        'clip-path': "url(#" + N.id + ")"
                                    }), r.clip = C;
                                }
                                if (!v) {
                                    var k = a.getAttribute("clip-path");
                                    if (k) {
                                        var L = e._g.doc.getElementById(k.replace(/(^url\(#|\)$)/g, c));
                                        L && L.parentNode.removeChild(L), m(a, {
                                            'clip-path': c
                                        }), delete r.clip;
                                    }
                                }
                                break;
                            case "path":
                                r.type == "path" && (m(a, {
                                    d: v ? (l.path = e._pathToAbsolute(v)) : "M0,0"
                                }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1)));
                                break;
                            case "width":
                                a.setAttribute(d, v), r._.dirty = 1;
                                if (!l.fx) {
                                    break;
                                }
                                d = "x", v = l.x;
                            case "x":
                                l.fx && (v = -l.x - (l.width || 0));
                            case "rx":
                                if (d == "rx" && r.type == "rect") {
                                    break;
                                }
                            case "cx":
                                a.setAttribute(d, v), r.pattern && y(r), r._.dirty = 1;
                                break;
                            case "height":
                                a.setAttribute(d, v), r._.dirty = 1;
                                if (!l.fy) {
                                    break;
                                }
                                d = "y", v = l.y;
                            case "y":
                                l.fy && (v = -l.y - (l.height || 0));
                            case "ry":
                                if (d == "ry" && r.type == "rect") {
                                    break;
                                }
                            case "cy":
                                a.setAttribute(d, v), r.pattern && y(r), r._.dirty = 1;
                                break;
                            case "r":
                                r.type == "rect" ? m(a, {
                                    rx: v,
                                    ry: v
                                }) : a.setAttribute(d, v), r._.dirty = 1;
                                break;
                            case "src":
                                r.type == "image" && a.setAttributeNS(p, "href", v);
                                break;
                            case "stroke-width":
                                if (r._.sx != 1 || r._.sy != 1) {
                                    v /= o(u(r._.sx), u(r._.sy)) || 1;
                                }
                                r.paper._vbSize && (v *= r.paper._vbSize), a.setAttribute(d, v), l['stroke-dasharray'] && E(r, l['stroke-dasharray'], s), r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1));
                                break;
                            case "stroke-dasharray":
                                E(r, v, s);
                                break;
                            case "fill":
                                var A = n(v)
                                    .match(e._ISURL);
                                if (A) {
                                    N = m("pattern");
                                    var O = m("image");
                                    N.id = e.createUUID(), m(N, {
                                        x: 0,
                                        y: 0,
                                        patternUnits: "userSpaceOnUse",
                                        height: 1,
                                        width: 1
                                    }), m(O, {
                                        x: 0,
                                        y: 0,
                                        'xlink:href': A[1]
                                    }), N.appendChild(O), (function (t) {
                                        e._preload(A[1], function () {
                                            var e = this.offsetWidth,
                                                n = this.offsetHeight;
                                            m(t, {
                                                width: e,
                                                height: n
                                            }), m(O, {
                                                width: e,
                                                height: n
                                            }), r.paper.safari();
                                        });
                                    })(N), r.paper.defs.appendChild(N), m(a, {
                                        fill: "url(#" + N.id + ")"
                                    }), r.pattern = N, r.pattern && y(r);
                                    break;
                                }
                                var M = e.getRGB(v);
                                if (!M.error) {
                                    delete s.gradient, delete l.gradient, !e.is(l.opacity, "undefined") && e.is(s.opacity, "undefined") && m(a, {
                                        opacity: l.opacity
                                    }), !e.is(l['fill-opacity'], "undefined") && e.is(s['fill-opacity'], "undefined") && m(a, {
                                        'fill-opacity': l['fill-opacity']
                                    });
                                } else if ((r.type == "circle" || r.type == "ellipse" || n(v)
                                    .charAt() != "r") && g(r, v)) {
                                    if ("opacity" in l || "fill-opacity" in l) {
                                        var _ = e._g.doc.getElementById(a.getAttribute("fill")
                                            .replace(/^url\(#|\)$/g, c));
                                        if (_) {
                                            var D = _.getElementsByTagName("stop");
                                            m(D[D.length - 1], {
                                                'stop-opacity': ("opacity" in l ? l.opacity : 1) * ("fill-opacity" in l ? l['fill-opacity'] : 1)
                                            });
                                        }
                                    }
                                    l.gradient = v, l.fill = "none";
                                    break;
                                }
                                M[t]("opacity") && m(a, {
                                    'fill-opacity': M.opacity > 1 ? M.opacity / 100 : M.opacity
                                });
                            case "stroke":
                                M = e.getRGB(v), a.setAttribute(d, M.hex), d == "stroke" && M[t]("opacity") && m(a, {
                                    'stroke-opacity': M.opacity > 1 ? M.opacity / 100 : M.opacity
                                }), d == "stroke" && r._.arrows && ("startString" in r._.arrows && b(r, r._.arrows.startString), "endString" in r._.arrows && b(r, r._.arrows.endString, 1));
                                break;
                            case "gradient":
                                (r.type == "circle" || r.type == "ellipse" || n(v)
                                    .charAt() != "r") && g(r, v);
                                break;
                            case "opacity":
                                l.gradient && !l[t]("stroke-opacity") && m(a, {
                                    'stroke-opacity': v > 1 ? v / 100 : v
                                });
                            case "fill-opacity":
                                if (l.gradient) {
                                    _ = e._g.doc.getElementById(a.getAttribute("fill")
                                        .replace(/^url\(#|\)$/g, c)), _ && (D = _.getElementsByTagName("stop"), m(D[D.length - 1], {
                                        'stop-opacity': v
                                    }));
                                    break;
                                }
                            default:
                                d == "font-size" && (v = i(v, 10) + "px");
                                var P = d.replace(/(\-.)/g, function (e) {
                                    return e.substring(1)
                                        .toUpperCase();
                                });
                                a.style[P] = v, r._.dirty = 1, a.setAttribute(d, v);
                            }
                        }
                    }
                    T(r, s), a.style.visibility = h;
                }, x = 1.2,
                T = function (r, s) {
                    if (r.type != "text" || !(s[t]("text") || s[t]("font") || s[t]("font-size") || s[t]("x") || s[t]("y"))) {
                        return;
                    }
                    var o = r.attrs,
                        u = r.node,
                        a = u.firstChild ? i(e._g.doc.defaultView.getComputedStyle(u.firstChild, c)
                            .getPropertyValue("font-size"), 10) : 10;
                    if (s[t]("text")) {
                        o.text = s.text;
                        while (u.firstChild) {
                            u.removeChild(u.firstChild);
                        }
                        var f = n(s.text)
                            .split("\n"),
                            l = [],
                            h;
                        for (var p = 0, d = f.length; p < d; p++) {
                            h = m("tspan"), p && m(h, {
                                dy: a * x,
                                x: o.x
                            }), h.appendChild(e._g.doc.createTextNode(f[p])), u.appendChild(h), l[p] = h;
                        }
                    } else {
                        l = u.getElementsByTagName("tspan");
                        for (p = 0, d = l.length; p < d; p++) {
                            p ? m(l[p], {
                                dy: a * x,
                                x: o.x
                            }) : m(l[0], {
                                dy: 0
                            });
                        }
                    }
                    m(u, {
                        x: o.x,
                        y: o.y
                    }), r._.dirty = 1;
                    var v = r._getBBox(),
                        g = o.y - (v.y + v.height / 2);
                    g && e.is(g, "finite") && m(l[0], {
                        dy: g
                    });
                }, N = function (t, n) {
                    var r = 0,
                        i = 0;
                    this[0] = this.node = t, t.raphael = true, this.id = e._oid++, t.raphaelid = this.id, this.matrix = e.matrix(), this.realPath = null, this.paper = n, this.attrs = this.attrs || {}, this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        deg: 0,
                        dx: 0,
                        dy: 0,
                        dirty: 1
                    }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null;
                }, C = e.el;
            N.prototype = C, C.constructor = N, e._engine.path = function (e, t) {
                var n = m("path");
                t.canvas && t.canvas.appendChild(n);
                var r = new N(n, t);
                return r.type = "path", S(r, {
                    fill: "none",
                    stroke: "#000",
                    path: e
                }), r;
            }, C.rotate = function (e, t, i) {
                if (this.removed) {
                    return this;
                }
                e = n(e)
                    .split(f), e.length - 1 && (t = r(e[1]), i = r(e[2])), e = r(e[0]), i == null && (t = i);
                if (t == null || i == null) {
                    var s = this.getBBox(1);
                    t = s.x + s.width / 2, i = s.y + s.height / 2;
                }
                return this.transform(this._.transform.concat([["r", e, t, i]])), this;
            }, C.scale = function (e, t, i, s) {
                if (this.removed) {
                    return this;
                }
                e = n(e)
                    .split(f), e.length - 1 && (t = r(e[1]), i = r(e[2]), s = r(e[3])), e = r(e[0]), t == null && (t = e), s == null && (i = s);
                if (i == null || s == null) {
                    var o = this.getBBox(1);
                }
                return i = i == null ? o.x + o.width / 2 : i, s = s == null ? o.y + o.height / 2 : s, this.transform(this._.transform.concat([["s", e, t, i, s]])), this;
            }, C.translate = function (e, t) {
                return this.removed ? this : (e = n(e)
                    .split(f), e.length - 1 && (t = r(e[1])), e = r(e[0]) || 0, t = +t || 0, this.transform(this._.transform.concat([["t", e, t]])), this);
            }, C.transform = function (n) {
                var r = this._;
                if (n == null) {
                    return r.transform;
                }
                e._extractTransform(this, n), this.clip && m(this.clip, {
                    transform: this.matrix.invert()
                }), this.pattern && y(this), this.node && m(this.node, {
                    transform: this.matrix
                });
                if (r.sx != 1 || r.sy != 1) {
                    var i = this.attrs[t]("stroke-width") ? this.attrs['stroke-width'] : 1;
                    this.attr({
                        'stroke-width': i
                    });
                }
                return this;
            }, C.hide = function () {
                return !this.removed && this.paper.safari(this.node.style.display = "none"), this;
            }, C.show = function () {
                return !this.removed && this.paper.safari(this.node.style.display = ""), this;
            }, C.remove = function () {
                if (this.removed || !this.node.parentNode) {
                    return;
                }
                var t = this.paper;
                t.__set__ && t.__set__.exclude(this), l.unbind("raphael.*.*." + this.id), this.gradient && t.defs.removeChild(this.gradient), e._tear(this, t), this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                for (var n in this) {
                    this[n] = typeof this[n] == "function" ? e._removedFactory(n) : null;
                }
                this.removed = true;
            }, C._getBBox = function () {
                if (this.node.style.display == "none") {
                    this.show();
                    var e = true;
                }
                var t = {};
                try {
                    t = this.node.getBBox();
                } catch (n) {} finally {
                    t = t || {};
                }
                return e && this.hide(), t;
            }, C.attr = function (n, r) {
                if (this.removed) {
                    return this;
                }
                if (n == null) {
                    var i = {};
                    for (var s in this.attrs) {
                        this.attrs[t](s) && (i[s] = this.attrs[s]);
                    }
                    return i.gradient && i.fill == "none" && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i;
                }
                if (r == null && e.is(n, "string")) {
                    if (n == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
                        return this.attrs.gradient;
                    }
                    if (n == "transform") {
                        return this._.transform;
                    }
                    var o = n.split(f),
                        u = {};
                    for (var a = 0, c = o.length; a < c; a++) {
                        n = o[a], n in this.attrs ? (u[n] = this.attrs[n]) : e.is(this.paper.customAttributes[n], "function") ? (u[n] = this.paper.customAttributes[n].def) : (u[n] = e._availableAttrs[n]);
                    }
                    return c - 1 ? u : u[o[0]];
                }
                if (r == null && e.is(n, "array")) {
                    u = {};
                    for (a = 0, c = n.length; a < c; a++) {
                        u[n[a]] = this.attr(n[a]);
                    }
                    return u;
                }
                if (r != null) {
                    var h = {};
                    h[n] = r;
                } else {
                    n != null && e.is(n, "object") && (h = n);
                }
                for (var p in h) {
                    l("raphael.attr." + p + "." + this.id, this, h[p]);
                }
                for (p in this.paper.customAttributes) {
                    if (this.paper.customAttributes[t](p) && h[t](p) && e.is(this.paper.customAttributes[p], "function")) {
                        var d = this.paper.customAttributes[p].apply(this, [].concat(h[p]));
                        this.attrs[p] = h[p];
                        for (var v in d) {
                            d[t](v) && (h[v] = d[v]);
                        }
                    }
                }
                return S(this, h), this;
            }, C.toFront = function () {
                if (this.removed) {
                    return this;
                }
                this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                var t = this.paper;
                return t.top != this && e._tofront(this, t), this;
            }, C.toBack = function () {
                if (this.removed) {
                    return this;
                }
                var t = this.node.parentNode;
                t.tagName.toLowerCase() == "a" ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), e._toback(this, this.paper);
                var n = this.paper;
                return this;
            }, C.insertAfter = function (t) {
                if (this.removed) {
                    return this;
                }
                var n = t.node || t[t.length - 1].node;
                return n.nextSibling ? n.parentNode.insertBefore(this.node, n.nextSibling) : n.parentNode.appendChild(this.node), e._insertafter(this, t, this.paper), this;
            }, C.insertBefore = function (t) {
                if (this.removed) {
                    return this;
                }
                var n = t.node || t[0].node;
                return n.parentNode.insertBefore(this.node, n), e._insertbefore(this, t, this.paper), this;
            }, C.blur = function (t) {
                var n = this;
                if (+t !== 0) {
                    var r = m("filter"),
                        i = m("feGaussianBlur");
                    n.attrs.blur = t, r.id = e.createUUID(), m(i, {
                        stdDeviation: +t || 1.5
                    }), r.appendChild(i), n.paper.defs.appendChild(r), n._blur = r, m(n.node, {
                        filter: "url(#" + r.id + ")"
                    });
                } else {
                    n._blur && (n._blur.parentNode.removeChild(n._blur), delete n._blur, delete n.attrs.blur), n.node.removeAttribute("filter");
                }
            }, e._engine.circle = function (e, t, n, r) {
                var i = m("circle");
                e.canvas && e.canvas.appendChild(i);
                var s = new N(i, e);
                return s.attrs = {
                    cx: t,
                    cy: n,
                    r: r,
                    fill: "none",
                    stroke: "#000"
                }, s.type = "circle", m(i, s.attrs), s;
            }, e._engine.rect = function (e, t, n, r, i, s) {
                var o = m("rect");
                e.canvas && e.canvas.appendChild(o);
                var u = new N(o, e);
                return u.attrs = {
                    x: t,
                    y: n,
                    width: r,
                    height: i,
                    r: s || 0,
                    rx: s || 0,
                    ry: s || 0,
                    fill: "none",
                    stroke: "#000"
                }, u.type = "rect", m(o, u.attrs), u;
            }, e._engine.ellipse = function (e, t, n, r, i) {
                var s = m("ellipse");
                e.canvas && e.canvas.appendChild(s);
                var o = new N(s, e);
                return o.attrs = {
                    cx: t,
                    cy: n,
                    rx: r,
                    ry: i,
                    fill: "none",
                    stroke: "#000"
                }, o.type = "ellipse", m(s, o.attrs), o;
            }, e._engine.image = function (e, t, n, r, i, s) {
                var o = m("image");
                m(o, {
                    x: n,
                    y: r,
                    width: i,
                    height: s,
                    preserveAspectRatio: "none"
                }), o.setAttributeNS(p, "href", t), e.canvas && e.canvas.appendChild(o);
                var u = new N(o, e);
                return u.attrs = {
                    x: n,
                    y: r,
                    width: i,
                    height: s,
                    src: t
                }, u.type = "image", u;
            }, e._engine.text = function (t, n, r, i) {
                var s = m("text");
                t.canvas && t.canvas.appendChild(s);
                var o = new N(s, t);
                return o.attrs = {
                    x: n,
                    y: r,
                    'text-anchor': "middle",
                    text: i,
                    font: e._availableAttrs.font,
                    stroke: "none",
                    fill: "#000"
                }, o.type = "text", S(o, o.attrs), o;
            }, e._engine.setSize = function (e, t) {
                return this.width = e || this.width, this.height = t || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this;
            }, e._engine.create = function () {
                var t = e._getContainer.apply(0, arguments),
                    n = t && t.container,
                    r = t.x,
                    i = t.y,
                    s = t.width,
                    o = t.height;
                if (!n) {
                    throw new Error("SVG container not found.");
                }
                var u = m("svg"),
                    a = "overflow:hidden;",
                    f;
                return r = r || 0, i = i || 0, s = s || 512, o = o || 342, m(u, {
                    height: o,
                    version: 1.1,
                    width: s,
                    xmlns: "http://www.w3.org/2000/svg"
                }), n == 1 ? (u.style.cssText = a + "position:absolute;left:" + r + "px;top:" + i + "px", e._g.doc.body.appendChild(u), f = 1) : (u.style.cssText = a + "position:relative", n.firstChild ? n.insertBefore(u, n.firstChild) : n.appendChild(u)), n = new e._Paper, n.width = s, n.height = o, n.canvas = u, n.clear(), n._left = n._top = 0, f && (n.renderfix = function () {}), n.renderfix(), n;
            }, e._engine.setViewBox = function (e, t, n, r, i) {
                l("raphael.setViewBox", this, this._viewBox, [e, t, n, r, i]);
                var s = o(n / this.width, r / this.height),
                    u = this.top,
                    a = i ? "meet" : "xMinYMin",
                    f, c;
                e == null ? (this._vbSize && (s = 1), delete this._vbSize, f = "0 0 " + this.width + h + this.height) : (this._vbSize = s, f = e + h + t + h + n + h + r), m(this.canvas, {
                    viewBox: f,
                    preserveAspectRatio: a
                });
                while (s && u) {
                    c = "stroke-width" in u.attrs ? u.attrs['stroke-width'] : 1, u.attr({
                        'stroke-width': c
                    }), u._.dirty = 1, u._.dirtyT = 1, u = u.prev;
                }
                return this._viewBox = [e, t, n, r, !! i], this;
            }, e.prototype.renderfix = function () {
                var e = this.canvas,
                    t = e.style,
                    n;
                try {
                    n = e.getScreenCTM() || e.createSVGMatrix();
                } catch (r) {
                    n = e.createSVGMatrix();
                }
                var i = -n.e % 1,
                    s = -n.f % 1;
                if (i || s) {
                    i && (this._left = (this._left + i) % 1, t.left = this._left + "px"), s && (this._top = (this._top + s) % 1, t.top = this._top + "px");
                }
            }, e.prototype.clear = function () {
                e.eve("raphael.clear", this);
                var t = this.canvas;
                while (t.firstChild) {
                    t.removeChild(t.firstChild);
                }
                this.bottom = this.top = null, (this.desc = m("desc"))
                    .appendChild(e._g.doc.createTextNode("Created with Rapha\xEBl " + e.version)), t.appendChild(this.desc), t.appendChild(this.defs = m("defs"));
            }, e.prototype.remove = function () {
                l("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                for (var t in this) {
                    this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null;
                }
            };
            var k = e.st;
            for (var L in C) {
                C[t](L) && !k[t](L) && (k[L] = (function (e) {
                    return function () {
                        var t = arguments;
                        return this.forEach(function (n) {
                            n[e].apply(n, t);
                        });
                    };
                })(L));
            }
        })(window.Raphael), window.Raphael.vml && (function (e) {
            var t = "hasOwnProperty",
                n = String,
                r = parseFloat,
                i = Math,
                s = i.round,
                o = i.max,
                u = i.min,
                a = i.abs,
                f = "fill",
                l = /[, ]+/,
                c = e.eve,
                h = " progid:DXImageTransform.Microsoft",
                p = " ",
                d = "",
                v = {
                    M: "m",
                    L: "l",
                    C: "c",
                    Z: "x",
                    m: "t",
                    l: "r",
                    c: "v",
                    z: "x"
                }, m = /([clmz]),?([^clmz]*)/gi,
                g = / progid:\S+Blur\([^\)]+\)/g,
                y = /-?[^,\s-]+/g,
                b = "position:absolute;left:0;top:0;width:1px;height:1px",
                w = 21600,
                E = {
                    path: 1,
                    rect: 1,
                    image: 1
                }, S = {
                    circle: 1,
                    ellipse: 1
                }, x = function (t) {
                    var r = /[ahqstv]/gi,
                        i = e._pathToAbsolute;
                    n(t)
                        .match(r) && (i = e._path2curve), r = /[clmz]/g;
                    if (i == e._pathToAbsolute && !n(t)
                        .match(r)) {
                        var o = n(t)
                            .replace(m, function (e, t, n) {
                                var r = [],
                                    i = t.toLowerCase() == "m",
                                    o = v[t];
                                return n.replace(y, function (e) {
                                    i && r.length == 2 && (o += r + v[t == "m" ? "l" : "L"], r = []), r.push(s(e * w));
                                }), o + r;
                            });
                        return o;
                    }
                    var u = i(t),
                        a, f;
                    o = [];
                    for (var l = 0, c = u.length; l < c; l++) {
                        a = u[l], f = u[l][0].toLowerCase(), f == "z" && (f = "x");
                        for (var h = 1, g = a.length; h < g; h++) {
                            f += s(a[h] * w) + (h != g - 1 ? "," : d);
                        }
                        o.push(f);
                    }
                    return o.join(p);
                }, T = function (t, n, r) {
                    var i = e.matrix();
                    return i.rotate(-t, 0.5, 0.5), {
                        dx: i.x(n, r),
                        dy: i.y(n, r)
                    };
                }, N = function (e, t, n, r, i, s) {
                    var o = e._,
                        u = e.matrix,
                        l = o.fillpos,
                        c = e.node,
                        h = c.style,
                        d = 1,
                        v = "",
                        m, g = w / t,
                        y = w / n;
                    h.visibility = "hidden";
                    if (!t || !n) {
                        return;
                    }
                    c.coordsize = a(g) + p + a(y), h.rotation = s * (t * n < 0 ? -1 : 1);
                    if (s) {
                        var b = T(s, r, i);
                        r = b.dx, i = b.dy;
                    }
                    t < 0 && (v += "x"), n < 0 && (v += " y") && (d = -1), h.flip = v, c.coordorigin = r * -g + p + i * -y;
                    if (l || o.fillsize) {
                        var E = c.getElementsByTagName(f);
                        E = E && E[0], c.removeChild(E), l && (b = T(s, u.x(l[0], l[1]), u.y(l[0], l[1])), E.position = b.dx * d + p + b.dy * d), o.fillsize && (E.size = o.fillsize[0] * a(t) + p + o.fillsize[1] * a(n)), c.appendChild(E);
                    }
                    h.visibility = "visible";
                };
            e.toString = function () {
                return "Your browser doesn\x92t support SVG. Falling down to VML.\nYou are running Rapha\xEBl " + this.version;
            };
            var C = function (e, t, r) {
                var i = n(t)
                    .toLowerCase()
                    .split("-"),
                    s = r ? "end" : "start",
                    o = i.length,
                    u = "classic",
                    a = "medium",
                    f = "medium";
                while (o--) {
                    switch (i[o]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        u = i[o];
                        break;
                    case "wide":
                    case "narrow":
                        f = i[o];
                        break;
                    case "long":
                    case "short":
                        a = i[o];
                    default:
                        ;
                    }
                }
                var l = e.node.getElementsByTagName("stroke")[0];
                l[s + "arrow"] = u, l[s + "arrowlength"] = a, l[s + "arrowwidth"] = f;
            }, k = function (i, a) {
                    i.attrs = i.attrs || {};
                    var c = i.node,
                        h = i.attrs,
                        v = c.style,
                        m, g = E[i.type] && (a.x != h.x || a.y != h.y || a.width != h.width || a.height != h.height || a.cx != h.cx || a.cy != h.cy || a.rx != h.rx || a.ry != h.ry || a.r != h.r),
                        y = S[i.type] && (h.cx != a.cx || h.cy != a.cy || h.r != a.r || h.rx != a.rx || h.ry != a.ry),
                        b = i;
                    for (var T in a) {
                        a[t](T) && (h[T] = a[T]);
                    }
                    g && (h.path = e._getPath[i.type](i), i._.dirty = 1), a.href && (c.href = a.href), a.title && (c.title = a.title), a.target && (c.target = a.target), a.cursor && (v.cursor = a.cursor), "blur" in a && i.blur(a.blur);
                    if (a.path && i.type == "path" || g) {
                        c.path = x(~n(h.path)
                            .toLowerCase()
                            .indexOf("r") ? e._pathToAbsolute(h.path) : h.path), i.type == "image" && (i._.fillpos = [h.x, h.y], i._.fillsize = [h.width, h.height], N(i, 1, 1, 0, 0, 0));
                    }
                    "transform" in a && i.transform(a.transform);
                    if (y) {
                        var k = +h.cx,
                            A = +h.cy,
                            O = +h.rx || +h.r || 0,
                            _ = +h.ry || +h.r || 0;
                        c.path = e.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", s((k - O) * w), s((A - _) * w), s((k + O) * w), s((A + _) * w), s(k * w));
                    }
                    if ("clip-rect" in a) {
                        var D = n(a['clip-rect'])
                            .split(l);
                        if (D.length == 4) {
                            D[2] = +D[2] + +D[0], D[3] = +D[3] + +D[1];
                            var P = c.clipRect || e._g.doc.createElement("div"),
                                H = P.style;
                            H.clip = e.format("rect({1}px {2}px {3}px {0}px)", D), c.clipRect || (H.position = "absolute", H.top = 0, H.left = 0, H.width = i.paper.width + "px", H.height = i.paper.height + "px", c.parentNode.insertBefore(P, c), P.appendChild(c), c.clipRect = P);
                        }
                        a['clip-rect'] || c.clipRect && (c.clipRect.style.clip = "auto");
                    }
                    if (i.textpath) {
                        var B = i.textpath.style;
                        a.font && (B.font = a.font), a['font-family'] && (B.fontFamily = "\"" + a['font-family'].split(",")[0].replace(/^['"]+|['"]+$/g, d) + "\""), a['font-size'] && (B.fontSize = a['font-size']), a['font-weight'] && (B.fontWeight = a['font-weight']), a['font-style'] && (B.fontStyle = a['font-style']);
                    }
                    "arrow-start" in a && C(b, a['arrow-start']), "arrow-end" in a && C(b, a['arrow-end'], 1);
                    if (a.opacity != null || a['stroke-width'] != null || a.fill != null || a.src != null || a.stroke != null || a['stroke-width'] != null || a['stroke-opacity'] != null || a['fill-opacity'] != null || a['stroke-dasharray'] != null || a['stroke-miterlimit'] != null || a['stroke-linejoin'] != null || a['stroke-linecap'] != null) {
                        var j = c.getElementsByTagName(f),
                            F = false;
                        j = j && j[0], !j && (F = j = M(f)), i.type == "image" && a.src && (j.src = a.src), a.fill && (j.on = true);
                        if (j.on == null || a.fill == "none" || a.fill === null) {
                            j.on = false;
                        }
                        if (j.on && a.fill) {
                            var I = n(a.fill)
                                .match(e._ISURL);
                            if (I) {
                                j.parentNode == c && c.removeChild(j), j.rotate = true, j.src = I[1], j.type = "tile";
                                var q = i.getBBox(1);
                                j.position = q.x + p + q.y, i._.fillpos = [q.x, q.y], e._preload(I[1], function () {
                                    i._.fillsize = [this.offsetWidth, this.offsetHeight];
                                });
                            } else {
                                j.color = e.getRGB(a.fill)
                                    .hex, j.src = d, j.type = "solid", e.getRGB(a.fill)
                                    .error && (b.type in {
                                            circle: 1,
                                            ellipse: 1
                                        } || n(a.fill)
                                        .charAt() != "r") && L(b, a.fill, j) && (h.fill = "none", h.gradient = a.fill, j.rotate = false);
                            }
                        }
                        if ("fill-opacity" in a || "opacity" in a) {
                            var U = ((+h['fill-opacity'] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+e.getRGB(a.fill)
                                .o + 1 || 2) - 1);
                            U = u(o(U, 0), 1), j.opacity = U, j.src && (j.color = "none");
                        }
                        c.appendChild(j);
                        var z = c.getElementsByTagName("stroke") && c.getElementsByTagName("stroke")[0],
                            W = false;
                        !z && (W = z = M("stroke"));
                        if (a.stroke && a.stroke != "none" || a['stroke-width'] || a['stroke-opacity'] != null || a['stroke-dasharray'] || a['stroke-miterlimit'] || a['stroke-linejoin'] || a['stroke-linecap']) {
                            z.on = true;
                        }(a.stroke == "none" || a.stroke === null || z.on == null || a.stroke == 0 || a['stroke-width'] == 0) && (z.on = false);
                        var X = e.getRGB(a.stroke);
                        z.on && a.stroke && (z.color = X.hex), U = ((+h['stroke-opacity'] + 1 || 2) - 1) * ((+h.opacity + 1 || 2) - 1) * ((+X.o + 1 || 2) - 1);
                        var V = (r(a['stroke-width']) || 1) * 0.75;
                        U = u(o(U, 0), 1), a['stroke-width'] == null && (V = h['stroke-width']), a['stroke-width'] && (z.weight = V), V && V < 1 && (U *= V) && (z.weight = 1), z.opacity = U, a['stroke-linejoin'] && (z.joinstyle = a['stroke-linejoin'] || "miter"), z.miterlimit = a['stroke-miterlimit'] || 8, a['stroke-linecap'] && (z.endcap = a['stroke-linecap'] == "butt" ? "flat" : a['stroke-linecap'] == "square" ? "square" : "round");
                        if (a['stroke-dasharray']) {
                            var $ = {
                                '-': "shortdash",
                                '.': "shortdot",
                                '-.': "shortdashdot",
                                '-..': "shortdashdotdot",
                                '. ': "dot",
                                '- ': "dash",
                                '--': "longdash",
                                '- .': "dashdot",
                                '--.': "longdashdot",
                                '--..': "longdashdotdot"
                            };
                            z.dashstyle = $[t](a['stroke-dasharray']) ? $[a['stroke-dasharray']] : d;
                        }
                        W && c.appendChild(z);
                    }
                    if (b.type == "text") {
                        b.paper.canvas.style.display = d;
                        var J = b.paper.span,
                            K = 100,
                            Q = h.font && h.font.match(/\d+(?:\.\d*)?(?=px)/);
                        v = J.style, h.font && (v.font = h.font), h['font-family'] && (v.fontFamily = h['font-family']), h['font-weight'] && (v.fontWeight = h['font-weight']), h['font-style'] && (v.fontStyle = h['font-style']), Q = r(h['font-size'] || Q && Q[0]) || 10, v.fontSize = Q * K + "px", b.textpath.string && (J.innerHTML = n(b.textpath.string)
                            .replace(/</g, "&#60;")
                            .replace(/&/g, "&#38;")
                            .replace(/\n/g, "<br>"));
                        var G = J.getBoundingClientRect();
                        b.W = h.w = (G.right - G.left) / K, b.H = h.h = (G.bottom - G.top) / K, b.X = h.x, b.Y = h.y + b.H / 2, ("x" in a || "y" in a) && (b.path.v = e.format("m{0},{1}l{2},{1}", s(h.x * w), s(h.y * w), s(h.x * w) + 1));
                        var Y = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
                        for (var Z = 0, et = Y.length; Z < et; Z++) {
                            if (Y[Z] in a) {
                                b._.dirty = 1;
                                break;
                            }
                        }
                        switch (h['text-anchor']) {
                        case "start":
                            b.textpath.style['v-text-align'] = "left", b.bbx = b.W / 2;
                            break;
                        case "end":
                            b.textpath.style['v-text-align'] = "right", b.bbx = -b.W / 2;
                            break;
                        default:
                            b.textpath.style['v-text-align'] = "center", b.bbx = 0;
                        }
                        b.textpath.style['v-text-kern'] = true;
                    }
                }, L = function (t, s, o) {
                    t.attrs = t.attrs || {};
                    var u = t.attrs,
                        a = Math.pow,
                        f, l, c = "linear",
                        h = ".5 .5";
                    t.attrs.gradient = s, s = n(s)
                        .replace(e._radial_gradient, function (e, t, n) {
                            return c = "radial", t && n && (t = r(t), n = r(n), a(t - 0.5, 2) + a(n - 0.5, 2) > 0.25 && (n = i.sqrt(0.25 - a(t - 0.5, 2)) * ((n > 0.5) * 2 - 1) + 0.5), h = t + p + n), d;
                        }), s = s.split(/\s*\-\s*/);
                    if (c == "linear") {
                        var v = s.shift();
                        v = -r(v);
                        if (isNaN(v)) {
                            return null;
                        }
                    }
                    var m = e._parseDots(s);
                    if (!m) {
                        return null;
                    }
                    t = t.shape || t.node;
                    if (m.length) {
                        t.removeChild(o), o.on = true, o.method = "none", o.color = m[0].color, o.color2 = m[m.length - 1].color;
                        var g = [];
                        for (var y = 0, b = m.length; y < b; y++) {
                            m[y].offset && g.push(m[y].offset + p + m[y].color);
                        }
                        o.colors = g.length ? g.join() : "0% " + o.color, c == "radial" ? (o.type = "gradientTitle", o.focus = "100%", o.focussize = "0 0", o.focusposition = h, o.angle = 0) : (o.type = "gradient", o.angle = (270 - v) % 360), t.appendChild(o);
                    }
                    return 1;
                }, A = function (t, n) {
                    this[0] = this.node = t, t.raphael = true, this.id = e._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = n, this.matrix = e.matrix(), this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        dx: 0,
                        dy: 0,
                        deg: 0,
                        dirty: 1,
                        dirtyT: 1
                    }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null;
                }, O = e.el;
            A.prototype = O, O.constructor = A, O.transform = function (t) {
                if (t == null) {
                    return this._.transform;
                }
                var r = this.paper._viewBoxShift,
                    i = r ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] : d,
                    s;
                r && (s = t = n(t)
                    .replace(/\.{3}|\u2026/g, this._.transform || d)), e._extractTransform(this, i + t);
                var o = this.matrix.clone(),
                    u = this.skew,
                    a = this.node,
                    f, l = ~n(this.attrs.fill)
                        .indexOf("-"),
                    c = !n(this.attrs.fill)
                        .indexOf("url(");
                o.translate(-0.5, -0.5);
                if (c || l || this.type == "image") {
                    u.matrix = "1 0 0 1", u.offset = "0 0", f = o.split();
                    if (l && f.noRotation || !f.isSimple) {
                        a.style.filter = o.toFilter();
                        var h = this.getBBox(),
                            v = this.getBBox(1),
                            m = h.x - v.x,
                            g = h.y - v.y;
                        a.coordorigin = m * -w + p + g * -w, N(this, 1, 1, m, g, 0);
                    } else {
                        a.style.filter = d, N(this, f.scalex, f.scaley, f.dx, f.dy, f.rotate);
                    }
                } else {
                    a.style.filter = d, u.matrix = n(o), u.offset = o.offset();
                }
                return s && (this._.transform = s), this;
            }, O.rotate = function (e, t, i) {
                if (this.removed) {
                    return this;
                }
                if (e == null) {
                    return;
                }
                e = n(e)
                    .split(l), e.length - 1 && (t = r(e[1]), i = r(e[2])), e = r(e[0]), i == null && (t = i);
                if (t == null || i == null) {
                    var s = this.getBBox(1);
                    t = s.x + s.width / 2, i = s.y + s.height / 2;
                }
                return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", e, t, i]])), this;
            }, O.translate = function (e, t) {
                return this.removed ? this : (e = n(e)
                    .split(l), e.length - 1 && (t = r(e[1])), e = r(e[0]) || 0, t = +t || 0, this._.bbox && (this._.bbox.x += e, this._.bbox.y += t), this.transform(this._.transform.concat([["t", e, t]])), this);
            }, O.scale = function (e, t, i, s) {
                if (this.removed) {
                    return this;
                }
                e = n(e)
                    .split(l), e.length - 1 && (t = r(e[1]), i = r(e[2]), s = r(e[3]), isNaN(i) && (i = null), isNaN(s) && (s = null)), e = r(e[0]), t == null && (t = e), s == null && (i = s);
                if (i == null || s == null) {
                    var o = this.getBBox(1);
                }
                return i = i == null ? o.x + o.width / 2 : i, s = s == null ? o.y + o.height / 2 : s, this.transform(this._.transform.concat([["s", e, t, i, s]])), this._.dirtyT = 1, this;
            }, O.hide = function () {
                return !this.removed && (this.node.style.display = "none"), this;
            }, O.show = function () {
                return !this.removed && (this.node.style.display = d), this;
            }, O._getBBox = function () {
                return this.removed ? {} : {
                    x: this.X + (this.bbx || 0) - this.W / 2,
                    y: this.Y - this.H,
                    width: this.W,
                    height: this.H
                };
            }, O.remove = function () {
                if (this.removed || !this.node.parentNode) {
                    return;
                }
                this.paper.__set__ && this.paper.__set__.exclude(this), e.eve.unbind("raphael.*.*." + this.id), e._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                for (var t in this) {
                    this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null;
                }
                this.removed = true;
            }, O.attr = function (n, r) {
                if (this.removed) {
                    return this;
                }
                if (n == null) {
                    var i = {};
                    for (var s in this.attrs) {
                        this.attrs[t](s) && (i[s] = this.attrs[s]);
                    }
                    return i.gradient && i.fill == "none" && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i;
                }
                if (r == null && e.is(n, "string")) {
                    if (n == f && this.attrs.fill == "none" && this.attrs.gradient) {
                        return this.attrs.gradient;
                    }
                    var o = n.split(l),
                        u = {};
                    for (var a = 0, h = o.length; a < h; a++) {
                        n = o[a], n in this.attrs ? (u[n] = this.attrs[n]) : e.is(this.paper.customAttributes[n], "function") ? (u[n] = this.paper.customAttributes[n].def) : (u[n] = e._availableAttrs[n]);
                    }
                    return h - 1 ? u : u[o[0]];
                }
                if (this.attrs && r == null && e.is(n, "array")) {
                    u = {};
                    for (a = 0, h = n.length; a < h; a++) {
                        u[n[a]] = this.attr(n[a]);
                    }
                    return u;
                }
                var p;
                r != null && (p = {}, p[n] = r), r == null && e.is(n, "object") && (p = n);
                for (var d in p) {
                    c("raphael.attr." + d + "." + this.id, this, p[d]);
                }
                if (p) {
                    for (d in this.paper.customAttributes) {
                        if (this.paper.customAttributes[t](d) && p[t](d) && e.is(this.paper.customAttributes[d], "function")) {
                            var v = this.paper.customAttributes[d].apply(this, [].concat(p[d]));
                            this.attrs[d] = p[d];
                            for (var m in v) {
                                v[t](m) && (p[m] = v[m]);
                            }
                        }
                    }
                    p.text && this.type == "text" && (this.textpath.string = p.text), k(this, p);
                }
                return this;
            }, O.toFront = function () {
                return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && e._tofront(this, this.paper), this;
            }, O.toBack = function () {
                return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), e._toback(this, this.paper)), this);
            }, O.insertAfter = function (t) {
                return this.removed ? this : (t.constructor == e.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), e._insertafter(this, t, this.paper), this);
            }, O.insertBefore = function (t) {
                return this.removed ? this : (t.constructor == e.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), e._insertbefore(this, t, this.paper), this);
            }, O.blur = function (t) {
                var n = this.node.runtimeStyle,
                    r = n.filter;
                r = r.replace(g, d), +t !== 0 ? (this.attrs.blur = t, n.filter = r + p + h + ".Blur(pixelradius=" + (+t || 1.5) + ")", n.margin = e.format("-{0}px 0 0 -{0}px", s(+t || 1.5))) : (n.filter = r, n.margin = 0, delete this.attrs.blur);
            }, e._engine.path = function (e, t) {
                var n = M("shape");
                n.style.cssText = b, n.coordsize = w + p + w, n.coordorigin = t.coordorigin;
                var r = new A(n, t),
                    i = {
                        fill: "none",
                        stroke: "#000"
                    };
                e && (i.path = e), r.type = "path", r.path = [], r.Path = d, k(r, i), t.canvas.appendChild(n);
                var s = M("skew");
                return s.on = true, n.appendChild(s), r.skew = s, r.transform(d), r;
            }, e._engine.rect = function (t, n, r, i, s, o) {
                var u = e._rectPath(n, r, i, s, o),
                    a = t.path(u),
                    f = a.attrs;
                return a.X = f.x = n, a.Y = f.y = r, a.W = f.width = i, a.H = f.height = s, f.r = o, f.path = u, a.type = "rect", a;
            }, e._engine.ellipse = function (e, t, n, r, i) {
                var s = e.path(),
                    o = s.attrs;
                return s.X = t - r, s.Y = n - i, s.W = r * 2, s.H = i * 2, s.type = "ellipse", k(s, {
                    cx: t,
                    cy: n,
                    rx: r,
                    ry: i
                }), s;
            }, e._engine.circle = function (e, t, n, r) {
                var i = e.path(),
                    s = i.attrs;
                return i.X = t - r, i.Y = n - r, i.W = i.H = r * 2, i.type = "circle", k(i, {
                    cx: t,
                    cy: n,
                    r: r
                }), i;
            }, e._engine.image = function (t, n, r, i, s, o) {
                var u = e._rectPath(r, i, s, o),
                    a = t.path(u)
                        .attr({
                            stroke: "none"
                        }),
                    l = a.attrs,
                    c = a.node,
                    h = c.getElementsByTagName(f)[0];
                return l.src = n, a.X = l.x = r, a.Y = l.y = i, a.W = l.width = s, a.H = l.height = o, l.path = u, a.type = "image", h.parentNode == c && c.removeChild(h), h.rotate = true, h.src = n, h.type = "tile", a._.fillpos = [r, i], a._.fillsize = [s, o], c.appendChild(h), N(a, 1, 1, 0, 0, 0), a;
            }, e._engine.text = function (t, r, i, o) {
                var u = M("shape"),
                    a = M("path"),
                    f = M("textpath");
                r = r || 0, i = i || 0, o = o || "", a.v = e.format("m{0},{1}l{2},{1}", s(r * w), s(i * w), s(r * w) + 1), a.textpathok = true, f.string = n(o), f.on = true, u.style.cssText = b, u.coordsize = w + p + w, u.coordorigin = "0 0";
                var l = new A(u, t),
                    c = {
                        fill: "#000",
                        stroke: "none",
                        font: e._availableAttrs.font,
                        text: o
                    };
                l.shape = u, l.path = a, l.textpath = f, l.type = "text", l.attrs.text = n(o), l.attrs.x = r, l.attrs.y = i, l.attrs.w = 1, l.attrs.h = 1, k(l, c), u.appendChild(f), u.appendChild(a), t.canvas.appendChild(u);
                var h = M("skew");
                return h.on = true, u.appendChild(h), l.skew = h, l.transform(d), l;
            }, e._engine.setSize = function (t, n) {
                var r = this.canvas.style;
                return this.width = t, this.height = n, t == +t && (t += "px"), n == +n && (n += "px"), r.width = t, r.height = n, r.clip = "rect(0 " + t + " " + n + " 0)", this._viewBox && e._engine.setViewBox.apply(this, this._viewBox), this;
            }, e._engine.setViewBox = function (t, n, r, i, s) {
                e.eve("raphael.setViewBox", this, this._viewBox, [t, n, r, i, s]);
                var u = this.width,
                    a = this.height,
                    f = 1 / o(r / u, i / a),
                    l, c;
                return s && (l = a / i, c = u / r, r * l < u && (t -= (u - r * l) / 2 / l), i * c < a && (n -= (a - i * c) / 2 / c)), this._viewBox = [t, n, r, i, !! s], this._viewBoxShift = {
                    dx: -t,
                    dy: -n,
                    scale: f
                }, this.forEach(function (e) {
                    e.transform("...");
                }), this;
            };
            var M;
            e._engine.initWin = function (e) {
                var t = e.document;
                t.createStyleSheet()
                    .addRule(".rvml", "behavior:url(#default#VML)");
                try {
                    !t.namespaces.rvml && t.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), M = function (e) {
                        return t.createElement("<rvml:" + e + " class=\"rvml\">");
                    };
                } catch (n) {
                    M = function (e) {
                        return t.createElement("<" + e + " xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">");
                    };
                }
            }, e._engine.initWin(e._g.win), e._engine.create = function () {
                var t = e._getContainer.apply(0, arguments),
                    n = t.container,
                    r = t.height,
                    i, s = t.width,
                    o = t.x,
                    u = t.y;
                if (!n) {
                    throw new Error("VML container not found.");
                }
                var a = new e._Paper,
                    f = a.canvas = e._g.doc.createElement("div"),
                    l = f.style;
                return o = o || 0, u = u || 0, s = s || 512, r = r || 342, a.width = s, a.height = r, s == +s && (s += "px"), r == +r && (r += "px"), a.coordsize = w * 1000 + p + w * 1000, a.coordorigin = "0 0", a.span = e._g.doc.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", f.appendChild(a.span), l.cssText = e.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", s, r), n == 1 ? (e._g.doc.body.appendChild(f), l.left = o + "px", l.top = u + "px", l.position = "absolute") : n.firstChild ? n.insertBefore(f, n.firstChild) : n.appendChild(f), a.renderfix = function () {}, a;
            }, e.prototype.clear = function () {
                e.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = e._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null;
            }, e.prototype.remove = function () {
                e.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                for (var t in this) {
                    this[t] = typeof this[t] == "function" ? e._removedFactory(t) : null;
                }
                return true;
            };
            var _ = e.st;
            for (var D in O) {
                O[t](D) && !_[t](D) && (_[D] = (function (e) {
                    return function () {
                        var t = arguments;
                        return this.forEach(function (n) {
                            n[e].apply(n, t);
                        });
                    };
                })(D));
            }
        })(window.Raphael);
        var own_regions = false;
        var own_continents = false;
        if (typeof simplemaps_continentmap_mapdata.continent != "undefined") {
            own_continents = true;
        }
        if (typeof simplemaps_continentmap_mapdata.regions != "undefined") {
            own_regions = true;
            var regions_map = simplemaps_continentmap_mapdata.regions;
        }
        var scripts = document.getElementsByTagName("script");
        var mysrc = scripts[scripts.length - 1].src;
        var directory = mysrc.substring(0, mysrc.lastIndexOf("/continentmap.js") + 1);
        var div = main_settings.div == undefined ? "map" : main_settings.div;
        var initial_zoom = main_settings.initial_zoom == undefined ? -1 : main_settings.initial_zoom;
        var initial_zoom_solo = main_settings.initial_zoom_solo == "yes" ? true : false;
        var grabdiv = document.getElementById(div);
        var map_outer = document.getElementById(div + "_outer") ? document.getElementById(div + "_outer") : false;
        var map_inner = document.getElementById(div + "_inner") ? document.getElementById(div + "_inner") : false;
        if (map_outer) {
            grabdiv.removeChild(map_outer);
            grabdiv.removeChild(map_inner);
            var tt_to_del = document.getElementById("tt_14");
            if (tt_to_del) {
                tt_to_del.parentNode.removeChild(tt_to_del);
            }
        }
        map_outer = document.createElement("div");
        map_inner = document.createElement("div");
        map_outer.id = div + "_outer";
        map_inner.id = div + "_inner";
        map_outer.style.position = "absolute";
        map_outer.style.zIndex = "1";
        grabdiv.appendChild(map_outer);
        grabdiv.appendChild(map_inner);
        var vml = Raphael.type == "VML" ? true : false;
        var ie = document.all ? true : false;
        var width = main_settings.width == undefined ? 800 : main_settings.width;
        var height = width / mapinfo.calibrate.ratio;
        var scale = width / mapinfo.calibrate.width;
        var r = Raphael(map_inner, width, height);
        r.setViewBox(x_start, y_start, width_start, height_start);
        var x_scale = mapinfo.calibrate.x_adjust * scale;
        var y_scale = mapinfo.calibrate.y_adjust * scale;
        var background = r.rect(-100 * scale, -100 * scale, 5000 * scale, 3000 * scale);
        var x_start = 0;
        var y_start = 0;
        var width_start = width;
        var height_start = height;
        var arrow_path = "m503.756,743.8668c190.3386-96.6725 132.9387-417.0538-155.601-409.7001v-128.7841l-228.082,195.0064 228.082,205.8238v-131.6233c240.9427-5.5381 229.9032,202.8594 155.601,269.2773z";
        var arrow_size = 0.05;
        var R = Raphael(map_outer, 35, 35);
        var back_arrow_box = R.rect(0, 0, 35, 35)
            .attr({
                fill: "black",
                opacity: 0,
                cursor: "pointer"
            });
        var back_arrow_arrow = R.path(arrow_path)
            .attr({
                stroke: "#88A4BC",
                'stroke-width': 2,
                'stroke-opacity': 1,
                fill: "#3B729F",
                'fill-opacity': 1,
                cursor: "pointer"
            })
            .scale(arrow_size, arrow_size, -2, -6);
        var back_arrow = R.set();
        back_arrow_arrow.reg_num = -1;
        back_arrow_box.reg_num = -1;
        back_arrow.push(back_arrow_arrow);
        back_arrow.push(back_arrow_box);
        back_arrow.hide();
        var tooltip_up, last_clicked;
        var region_map = {};
        var region_color_map = {};
        var region_hover_color_map = {};
        var html = [];
        var region_array = [];
        var last_region = -1;
        var zoom_in = false;
        var zoomed_reg = false;
        var inactive = false;
        var state_array = [];
        var location_array = [];
        var mapdata_stuff = "";
        var lattr = [];
        var cattr = [];
        var opacity;
        var label_color;
        var label_size;
        var on_click;
        var new_tab;
        var default_location_opacity;
        var ratio = 1;

        function refresh_main_settings() {
            opacity = main_settings.background_transparent == "yes" ? 0 : 1;
            label_color_hover = main_settings.label_color_hover ? main_settings.label_color_hover : main_settings.label_color;
            label_size = main_settings.label_size ? main_settings.label_size : "22";
            background.attr({
                fill: main_settings.background_color,
                'fill-opacity': opacity,
                stroke: "none"
            });
            if (main_settings.pop_ups == "on_click" || main_settings == "detect" || is_touch()) {
                on_click = true;
            } else {
                on_click = false;
            } if (main_settings.pop_ups == "on_hover") {
                on_click = false;
            }
        }
        refresh_main_settings();
        var tooltip = (function () {
            var id = "tt";
            var top = 5;
            var left = 5;
            var maxw = 400;
            var speed = 1000;
            var timer = 20;
            var endalpha = 90;
            var alpha = 0;
            var tt, t, c, b, h;
            return {
                show: function (v, w) {
                    if (tt == null) {
                        tt = document.createElement("div");
                        tt.setAttribute("id", id + "_14");
                        tt.style.zIndex = "1000000";
                        tt.style.margin = "0";
                        tt.style.padding = "0";
                        tt.style.position = "absolute";
                        tt.style.display = "block";
                        tt.style.background = "url(" + directory + "map_images/left.gif) top left no-repeat";
                        t = document.createElement("div");
                        t.setAttribute("id", id + "top" + "_14");
                        t.style.margin = "0";
                        t.style.padding = "0";
                        t.style.display = "block";
                        t.style.height = "5px";
                        t.style.marginLeft = "5px";
                        t.style.background = "url(" + directory + "map_images/top.gif) top right no-repeat";
                        t.style.overflow = "hidden";
                        c = document.createElement("div");
                        c.setAttribute("id", id + "cont" + "_14");
                        c.style.margin = "0";
                        c.style.padding = "0";
                        c.style.display = "block";
                        c.style.padding = "2px 12px 3px 7px";
                        c.style.marginLeft = "5px";
                        c.style.background = "#ebebeb";
                        c.style.color = "#000";
                        c.overflow = "hidden";
                        c.style.font = "12px/1.5 Verdana, Arial, Helvetica, sans-serif";
                        b = document.createElement("div");
                        b.setAttribute("id", id + "bot" + "_14");
                        b.style.margin = "0";
                        b.style.padding = "0";
                        b.style.display = "block";
                        b.style.height = "5px";
                        b.style.marginLeft = "5px";
                        b.style.background = "url(" + directory + "map_images/bottom.gif) top right no-repeat";
                        b.style.overflow = "hidden";
                        tt.appendChild(t);
                        tt.appendChild(c);
                        tt.appendChild(b);
                        document.body.appendChild(tt);
                        tt.style.opacity = 0;
                        tt.style.filter = "alpha(opacity=0)";
                        if (on_click) {
                            map_inner.onclick = this.pos;
                        } else {
                            map_inner.onmousemove = this.pos;
                        }
                    }
                    tt.style.display = "block";
                    tt.style.width = "";
                    c.innerHTML = v;
                    if (vml) {
                        g = document.getElementById("xmark_14");
                        if (g) {
                            g.style['float'] = "left";
                            g.style.marginLeft = "5px";
                        }
                        t.style.display = "none";
                        b.style.display = "none";
                        tt.style.width = tt.offsetWidth * 1.02;
                        if (tt.style.width > maxw) {
                            tt.style.width = maxw;
                        }
                        t.style.display = "block";
                        b.style.display = "block";
                    }
                    if (c.offsetWidth > maxw) {
                        tt.style.width = maxw + "px";
                    }
                    h = parseInt(tt.offsetHeight, 10) + top;
                    clearInterval(tt.timer);
                    tt.timer = setInterval(function () {
                        tooltip.fade(1);
                    }, timer);
                },
                pos: function (e) {
                    var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
                    var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
                    tt.style.top = u - h + "px";
                    tt.style.left = l + left + "px";
                },
                fade: function (d) {
                    var a = alpha;
                    if (a != endalpha && d == 1 || a != 0 && d == -1) {
                        var i = speed;
                        if (endalpha - a < speed && d == 1) {
                            i = endalpha - a;
                        } else if (alpha < speed && d == -1) {
                            i = a;
                        }
                        alpha = a + i * d;
                        tt.style.opacity = alpha * 0.01;
                        tt.style.filter = "alpha(opacity=" + alpha + ")";
                    } else {
                        clearInterval(tt.timer);
                        if (d == -1) {
                            tt.style.display = "none";
                        }
                    }
                },
                hide: function () {
                    if (tt != undefined) {
                        clearInterval(tt.timer);
                        tt.timer = setInterval(function () {
                            tooltip.fade(-1);
                        }, timer);
                    }
                }
            };
        })();
        if (!own_regions) {
            var regions_map = mapinfo.default_regions;
        }
        if (main_settings.zoom == "no") {
            var regions_map = {};
        }
        for (var region in regions_map) {
            regify(region);
        }

        function regify(region) {
            region_array[region] = r.set();
            for (var i = 0; i < regions_map[region].states.length; i++) {
                state = regions_map[region].states[i];
                region_map[state] = region;
                region_color_map[state] = regions_map[region].color;
                region_hover_color_map[state] = regions_map[region].hover_color;
            }
        }
        if (own_regions) {
            var bbox_array = [];

            function bboxify(region) {
                bbox_array[region] = region_array[region].getBBox();
                delete bbox_array[region].x2;
                delete bbox_array[region].y2;
                bbox_array[region].x = bbox_array[region].x / scale;
                bbox_array[region].y = bbox_array[region].y / scale;
                bbox_array[region].height = bbox_array[region].height / scale;
                bbox_array[region].width = bbox_array[region].width / scale;
            }
        }
        if (own_continents) {
            bbox_array = simplemaps_continentmap_mapdata.continent;
        }
        if (!own_regions && !own_continents) {
            bbox_array = mapinfo.default_bbox;
        }
        bbox_array[-1] = {};
        bbox_array[-1].x = x_start / scale;
        bbox_array[-1].y = y_start / scale;
        bbox_array[-1].height = height_start / scale;
        bbox_array[-1].width = width_start / scale;

        function reset() {
            if (last_clicked) {
                if (last_clicked.size != undefined) {
                    last_clicked.animate({
                        'stroke-width': 1.5
                    }, 200);
                } else {
                    last_clicked.animate({
                        fill: cattr[last_clicked.id].color
                    }, 200);
                }
            }
        }

        function is_state(obj) {
            if (obj.size) {
                return false;
            } else {
                return true;
            }
        }

        function is_region(obj) {
            if (!is_state) {
                return false;
            }
            if (zoom_in && obj.reg_num == zoomed_reg) {
                return false;
            }
            if (!obj.reg_num) {
                return false;
            }
            return true;
        }

        function over(obj_from_label) {
            if (obj_from_label.id != undefined) {
                var that = obj_from_label;
            } else {
                var that = this;
            } if (tooltip_up) {
                return;
            }
            if (that.inactive && zoom_in || inactive) {
                return;
            }
            var reg_num = that.reg_num;
            if (is_region(that)) {
                var cur_reg = region_array[reg_num];
                if (!on_click) {
                    tooltip.show("<b>" + regions_map[reg_num].name + "</b>");
                }
                if (regions_map[reg_num].color && regions_map[reg_num].hover_color && !zoom_in) {
                    cur_reg.attr({
                        fill: regions_map[reg_num].hover_color
                    });
                } else {
                    cur_reg.attr({
                        'fill-opacity': 0.5
                    });
                }
                that.stop();
            } else {
                if (that.inactive) {
                    return;
                }
                that.stop()
                    .animate({
                        fill: cattr[that.id].hover_color
                    }, 1);
                if (!on_click) {
                    tooltip.show(html[that.id]);
                }
            }
        }

        function out(obj_from_label) {
            if (obj_from_label.id != undefined) {
                var that = obj_from_label;
            } else {
                var that = this;
            } if (tooltip_up) {
                return;
            }
            if (!inactive) {
                var reg_num = that.reg_num;
                if (is_region(that)) {
                    var cur_reg = region_array[reg_num];
                    var opac = zoomed_reg && zoom_in ? 0.2 : 1;
                    if (regions_map[reg_num].color && regions_map[reg_num].hover_color && !zoom_in) {
                        cur_reg.attr({
                            fill: regions_map[reg_num].color
                        });
                    } else {
                        cur_reg.attr({
                            'fill-opacity': opac
                        });
                    }
                    that.stop();
                    tooltip.hide();
                } else {
                    that.stop()
                        .animate({
                            fill: cattr[that.id].color
                        }, 200);
                    tooltip.hide();
                }
            }
        }

        function over_loc() {
            if (this.inactive || tooltip_up) {
                return;
            }
            if (!on_click) {
                tooltip.show(html[this.id]);
            }
            this.animate({
                fill: this.color,
                'stroke-width': 2
            }, 1);
        }

        function out_loc() {
            if (this.inactive || tooltip_up) {
                return;
            }
            this.animate({
                fill: this.color,
                'stroke-width': 1.5
            }, 1);
            tooltip.hide();
        }

        function back_click() {
            reset();
            tooltip.hide();
            tooltip_up = false;
        }

        function over_lab() {
            over(state_array[this.id]);
        }

        function out_lab() {
            out(state_array[this.id]);
        }

        function click_lab() {
            click(state_array[this.id]);
        }

        function click(label_exists) {
            if (label_exists != undefined) {
                if (label_exists.id != undefined) {
                    var that = label_exists;
                } else {
                    var that = this;
                }
            } else {
                that = this;
            } if (is_region(that)) {
                region_click(that);
            } else if (on_click) {
                click_click(that);
            } else {
                hover_click(that);
            }

            function hover_click(that) {
                var link = that.url;
                if (link != "") {
                    if (!new_tab) {
                        window.location.href = link;
                        return;
                    } else {
                        window.open(link, "_newtab");
                        tooltip.hide();
                        reset();
                        return;
                    }
                } else {
                    return;
                }
            }

            function click_click(that) {
                var is_location = that.size == undefined ? false : true;
                if (tooltip_up) {
                    reset();
                    if (!is_location) {
                        that.animate({
                            fill: cattr[that.id].hover_color
                        }, 1);
                    }
                }
                tooltip.show(html[that.id]);
                tooltip_up = true;
                last_clicked = that;
                document.getElementById("xpic_14")
                    .onclick = function () {
                        back_click();
                };
                return;
            }

            function region_click(that) {
                if (that.reg_num == -1) {} else if (regions_map[that.reg_num].url) {
                    that.url = regions_map[that.reg_num].url;
                    hover_click(that);
                    return;
                } else if (regions_map[that.reg_num].color && regions_map[that.reg_num].hover_color) {
                    region_array[that.reg_num].attr({
                        fill: regions_map[that.reg_num].color
                    });
                }
                inactive = true;
                tooltip.hide();
                zoomed_reg = that.reg_num;
                if (zoomed_reg != -1) {
                    world.animate({
                        'fill-opacity': 0.2
                    }, 300);
                    region_array[zoomed_reg].animate({
                        'fill-opacity': 1
                    }, 300);
                } else {
                    world.animate({
                        'fill-opacity': 1
                    }, 300);
                }
                reset();
                tooltip_up = false;
                var bbox = bbox_array[that.reg_num];
                var gotoX = bbox.x * scale;
                var gotoY = bbox.y * scale;
                var gotoW = bbox.width * scale;
                var gotoH = bbox.height * scale;
                var actualWH;
                var paperWidth = width;
                var paperHeight = height;
                if (gotoW / gotoH > paperWidth / paperHeight) {
                    isWider = true;
                    ratio = gotoW / paperWidth;
                    actualWH = paperHeight * ratio;
                    gotoY -= (actualWH - gotoH) / 2;
                } else {
                    isWider = false;
                    ratio = gotoH / paperHeight;
                    actualWH = paperWidth * ratio;
                    gotoX -= (actualWH - gotoW) / 2;
                }
                for (var i = 0; i < location_set.items.length; i++) {
                    var lct = location_set.items[i];
                    var new_side = lct.size * ratio;
                    if (lct.type == "circle") {
                        lct.animate({
                            r: new_side
                        }, 200);
                    } else {
                        var new_x = lct.x + (lct.size - new_side) / 2;
                        var new_y = lct.y + (lct.size - new_side) / 2;
                        lct.animate({
                            height: new_side,
                            width: new_side,
                            x: new_x,
                            y: new_y
                        }, 200);
                    }
                }

                function updateZoom() {
                    r.setViewBox(animateObj.x, animateObj.y, animateObj.w, animateObj.h, false);
                }

                function whenDone() {
                    inactive = false;
                    world.show();
                    location_set.show();
                    if (initial_zoom > -1 && initial_zoom_solo) {
                        world.hide();
                        region_array[zoomed_reg].show();
                    } else if (initial_zoom > -1 && !initial_zoom_solo && zoomed_reg != -1) {
                        back_arrow.show();
                    }
                }
                if (is_touch() || vml) {
                    animateObj = {
                        x: gotoX,
                        y: gotoY,
                        w: gotoW,
                        h: gotoH,
                        r: ratio
                    };
                    updateZoom();
                    whenDone();
                } else {
                    animateObj = {
                        x: x_start,
                        y: y_start,
                        w: width_start,
                        h: height_start,
                        r: ratio
                    };
                    TweenLite.to(animateObj, 0.5, {
                        x: gotoX,
                        y: gotoY,
                        w: gotoW,
                        h: gotoH,
                        onUpdate: updateZoom,
                        onComplete: whenDone
                    });
                } if (zoomed_reg == -1) {
                    back_arrow.hide();
                }
                if (last_region == -1) {
                    back_arrow.show();
                }
                x_start = gotoX;
                y_start = gotoY;
                width_start = gotoW;
                height_start = gotoH;
                zoom_in = zoomed_reg == -1 ? false : true;
                last_region = zoomed_reg;
            }
        }

        function set_atttributes() {
            new_tab = main_settings.url_new_tab == "yes" ? true : false;
            default_location_opacity = main_settings.location_opacity ? main_settings.location_opacity : 1;
            var default_state = {};
            default_state.color = main_settings.state_color;
            default_state.hover_color = main_settings.state_hover_color;
            default_state.description = main_settings.state_description;
            default_state.url = main_settings.state_url;
            default_state.inactive = main_settings.all_states_inactive;
            default_state.hide = "no";
            default_state.hide_label = "no";
            for (var id in mapinfo.paths) {
                cattr[id] = Object.create(default_state);
                if (id == "GU" || id == "PR" || id == "VI" || id == "MP") {
                    cattr[id].hide = "yes";
                }
                if (region_color_map[id]) {
                    cattr[id].color = region_color_map[id];
                }
                if (region_hover_color_map[id]) {
                    cattr[id].hover_color = region_hover_color_map[id];
                }
                for (var prop in state_specific[id]) {
                    if (state_specific[id][prop] != "default") {
                        cattr[id][prop] = state_specific[id][prop];
                    }
                }
            }
            var default_location = {};
            default_location.color = main_settings.location_color;
            default_location.size = main_settings.location_size;
            default_location.description = main_settings.location_description;
            default_location.url = main_settings.location_url;
            default_location.inactive = main_settings.all_locations_inactive;
            default_location.type = main_settings.location_type;
            default_location.opacity = default_location_opacity;
            if (default_location.type == undefined) {
                default_location.type = "square";
            }
            for (var id in locations) {
                lattr[id] = Object.create(default_location);
                for (var prop in locations[id]) {
                    if (locations[id][prop] != "default") {
                        lattr[id][prop] = locations[id][prop];
                    }
                }
            }
        }

        function create_content(state) {
            var content = state.description;
            var xmark = "<img id=\"xpic_14\" src=\"" + directory + "map_images/x.png\" width=\"15\" height=\"15\" alt=\"Close\" border=\"0\" />";
            var linkhere_end = new_tab ? "\" target=\"_blank\">(Link) </a>" : "\">(Link) </a>";
            var linkhere = " <a href=\" " + state.url + linkhere_end;
            if (!on_click) {
                xmark = "";
                linkhere = "";
            }
            if (state.url == "") {
                linkhere = "";
            }
            var content_part = content == "" ? (content_part = "") : "<div id=\"customer_14\"; style=\"float: left; clear: both; margin: 0px; padding: 0px;\" />" + content + "</div>";
            html[state.id] = "<div id=\"tt_title_14\" style=\"font-weight: bold; padding: 0px; margin-right:0px; margin-left: 0px; margin-top: 0px; margin-bottom:3px; \"><div id=\"tt_name_14\" style=\"float: left\">" + state.name + linkhere + "</div><div id=\"xmark_14\" style=\"float: right; margin: 0px; cursor: pointer;\">" + xmark + "</div></div>" + content_part + "<div id=\"ttfix_14\" style=\"clear:both;\"></div>";
        }
        if (demo) {
            var demo = r.text(640, 550, "Simplemaps.com Trial")
                .attr({
                    'font-size': 25,
                    'font-weight': "bold",
                    cursor: "auto",
                    'font-family': "arial,sans-serif",
                    href: "http://simplemaps.com/us"
                });
            demo.scale(scale, scale, 0, 0);
        }
        var world = r.set();
        var label_set = r.set();
        var location_set = r.set();
        world.hide();
        location_set.hide();
        simplemaps_continentmap_refresh = function (firstrun) {
            locations = simplemaps_continentmap_mapdata.locations;
            main_settings = simplemaps_continentmap_mapdata.main_settings;
            state_specific = simplemaps_continentmap_mapdata.state_specific;
            set_atttributes();
            for (var state in mapinfo.paths) {
                if (cattr[state].hide != "yes") {
                    if (state_array[state] == undefined) {
                        var st = r.path(mapinfo.paths[state].path);
                        st.scale(scale, scale, x_scale, y_scale);
                        state_array[state] = st;
                        if (region_map[state]) {
                            region_array[region_map[state]].push(st);
                        }
                        world.push(st);
                    } else {
                        st = state_array[state];
                        refresh_main_settings();
                    } if (firstrun) {
                        st.hide();
                    }
                    st_attr = cattr[state];
                    st.attr({
                        stroke: main_settings.border_color,
                        fill: st_attr.color,
                        cursor: "pointer",
                        'stroke-opacity': 1,
                        'stroke-width': 1.5,
                        'stroke-linejoin': "round"
                    });
                    st.reg_num = region_map[state];
                    st.id = state;
                    st.name = st_attr.name == undefined ? mapinfo.names[state] : st_attr.name;
                    st.url = st_attr.url;
                    st.description = st_attr.description;
                    st.inactive = st_attr.inactive == "yes" ? true : false;
                    create_content(st);
                    if (main_settings.hide_labels != "yes") {
                        var label_opacity = main_settings.hide_labels == "yes" ? 0 : 1;
                        if (cattr[state].hide_label != "yes" && mapinfo.labels != undefined) {
                            var label = r.text(mapinfo.labels[state].label_x, mapinfo.labels[state].label_y)
                                .attr({
                                    text: state,
                                    fill: main_settings.label_color,
                                    'fill-opacity': label_opacity,
                                    'font-size': 22,
                                    'font-weight': "bold",
                                    cursor: "pointer",
                                    'font-family': "arial,sans-serif"
                                });
                            label.scale(scale, scale, x_scale, y_scale);
                            label.id = state;
                            label.reg_num = region_map[state];
                            label_set.push(label);
                            label.toFront();
                        }
                    }
                }
            }
            for (var location in location_array) {
                location_array[location].remove();
            }
            for (var location in locations) {
                var size = lattr[location].size;
                var type = lattr[location].type;
                if (type == "circle") {
                    size *= 0.6;
                }
                var point = getxy(lattr[location].lat, lattr[location].lng, size, type);
                if (locations[location].x != undefined) {
                    point.x = locations[location].x, point.y = locations[location].y;
                }
                if (type == "circle") {
                    var st = r.circle(point.x, point.y, size * ratio);
                } else {
                    var st = r.rect(point.x, point.y, size * ratio, size * ratio);
                } if (firstrun) {
                    st.hide();
                }
                st.size = size;
                st.opacity = lattr[location].opacity;
                st.id = location;
                st.name = lattr[location].name;
                st.color = lattr[location].color;
                st.url = lattr[location].url, st.attr({
                    fill: st.color,
                    'stroke-width': 1.5,
                    stroke: "#FFFFFF",
                    cursor: "pointer",
                    opacity: st.opacity
                })
                    .scale(scale, scale, x_scale, y_scale)
                    .toFront();
                st.x = point.x;
                st.y = point.y;
                st.inactive = lattr[location].inactive == "yes" ? true : false;
                st.description = lattr[location].description;
                location_set.push(st);
                create_content(st);
                location_array[location] = st;
            }
            location_set.hover(over_loc, out_loc);
            location_set.click(click);
            label_set.hover(over_lab, out_lab);
            label_set.click(click_lab);
        };
        simplemaps_continentmap_refresh(true);
        simplemaps_continentmap_zoom = function (cont) {
            if (cont > -1) {
                click.call(region_array[cont][0], true);
            } else {
                click.call(back_arrow[0]);
            }
        };
        location_set.hover(over_loc, out_loc);
        label_set.hover(over_lab, out_lab);
        label_set.click(click_lab);
        world.hover(over, out);
        location_set.click(click);
        world.click(click);
        back_arrow.click(click);
        background.click(back_click);
        if (own_regions && !own_continents) {
            for (var region in regions_map) {
                bboxify(region);
            }
        }
        if (own_regions && !own_continents) {
            var print_this = "continent:[\n\n";
            simplemaps_continentmap_mapdata.continent = [];
            for (var region in regions_map) {
                print_this += "{\n";
                for (property in bbox_array[region]) {
                    var comma = property != "height" ? "," : "";
                    print_this += property + ": " + bbox_array[region][property] + comma + "\n";
                }
                var nr = parseInt(region) + 1;
                var comma = regions_map[nr] ? "," : "";
                print_this += "}" + comma + "\n\n";
                simplemaps_continentmap_mapdata.continent[region] = bbox_array[region];
            }
            print_this += "]";
            if (document.getElementById("result")) {
                document.getElementById("result")
                    .value = print_this;
            }
        }
        if (initial_zoom > -1) {
            click.call(region_array[initial_zoom][0], true);
            back_arrow.hide();
        } else {
            world.show();
            location_set.show();
        }
    })();
}

if (window.addEventListener) {
    window.addEventListener("load", function () {
        simplemaps_continentmap(true);
    }, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", function () {
        simplemaps_continentmap(true);
    });
}
