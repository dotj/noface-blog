(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "8+s/": function(e, t, n) {
      "use strict";
      function r(e) {
        return e && "object" == typeof e && "default" in e ? e.default : e;
      }
      var o = n("q1tI"),
        i = r(o),
        a = r(n("Gytx"));
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var c = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = function(e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function(r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var l,
            s = [];
          function T() {
            (l = e(
              s.map(function(e) {
                return e.props;
              })
            )),
              f.canUseDOM ? t(l) : n && (l = n(l));
          }
          var f = (function(e) {
            var t, n;
            function o() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
              ((t = o).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (o.peek = function() {
                return l;
              }),
              (o.rewind = function() {
                if (o.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = l;
                return (l = void 0), (s = []), e;
              });
            var u = o.prototype;
            return (
              (u.shouldComponentUpdate = function(e) {
                return !a(e, this.props);
              }),
              (u.componentWillMount = function() {
                s.push(this), T();
              }),
              (u.componentDidUpdate = function() {
                T();
              }),
              (u.componentWillUnmount = function() {
                var e = s.indexOf(this);
                s.splice(e, 1), T();
              }),
              (u.render = function() {
                return i.createElement(r, this.props);
              }),
              o
            );
          })(o.Component);
          return (
            u(
              f,
              "displayName",
              "SideEffect(" +
                (function(e) {
                  return e.displayName || e.name || "Component";
                })(r) +
                ")"
            ),
            u(f, "canUseDOM", c),
            f
          );
        };
      };
    },
    Gytx: function(e, t) {
      e.exports = function(e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (
          var u = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < i.length;
          c++
        ) {
          var l = i[c];
          if (!u(l)) return !1;
          var s = e[l],
            T = t[l];
          if (
            !1 === (o = n ? n.call(r, s, T, l) : void 0) ||
            (void 0 === o && s !== T)
          )
            return !1;
        }
        return !0;
      };
    },
    N8DM: function(e, t, n) {
      "use strict";
      var r = n("TqRt");
      t.__esModule = !0;
      var o = r(n("QL1J"));
      t.ThemeToggler = o.default;
    },
    QL1J: function(e, t, n) {
      "use strict";
      var r = n("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var o = r(n("PJYZ")),
        i = r(n("VbXa")),
        a = r(n("lSNA")),
        u = r(n("q1tI")),
        c = r(n("17x9")),
        l = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(r)) || this),
              (0, a.default)((0, o.default)(t), "state", {
                theme: "undefined" != typeof window ? window.__theme : null
              }),
              t
            );
          }
          (0, i.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function() {
              var e = this;
              window.__onThemeChange = function() {
                e.setState({ theme: window.__theme });
              };
            }),
            (n.toggleTheme = function(e) {
              window.__setPreferredTheme(e);
            }),
            (n.render = function() {
              return u.default.createElement(this.props.children, {
                theme: this.state.theme,
                toggleTheme: this.toggleTheme
              });
            }),
            t
          );
        })(u.default.Component);
      l.propTypes = { children: c.default.func.isRequired };
      var s = l;
      t.default = s;
    },
    TJpk: function(e, t, n) {
      (t.__esModule = !0), (t.Helmet = void 0);
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = T(n("q1tI")),
        a = T(n("17x9")),
        u = T(n("8+s/")),
        c = T(n("bmMU")),
        l = n("v1p5"),
        s = n("hFT/");
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function f(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function E(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var d,
        A,
        h,
        m = (0, u.default)(
          l.reducePropsToState,
          l.handleClientStateChange,
          l.mapStateOnServer
        )(function() {
          return null;
        }),
        S =
          ((d = m),
          (h = A = (function(e) {
            function t() {
              return p(this, t), E(this, e.apply(this, arguments));
            }
            return (
              (function(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, e),
              (t.prototype.shouldComponentUpdate = function(e) {
                return !(0, c.default)(this.props, e);
              }),
              (t.prototype.mapNestedChildrenToProps = function(e, t) {
                if (!t) return null;
                switch (e.type) {
                  case s.TAG_NAMES.SCRIPT:
                  case s.TAG_NAMES.NOSCRIPT:
                    return { innerHTML: t };
                  case s.TAG_NAMES.STYLE:
                    return { cssText: t };
                }
                throw new Error(
                  "<" +
                    e.type +
                    " /> elements are self-closing and can not contain children. Refer to our API for more information."
                );
              }),
              (t.prototype.flattenArrayTypeChildren = function(e) {
                var t,
                  n = e.child,
                  o = e.arrayTypeChildren,
                  i = e.newChildProps,
                  a = e.nestedChildren;
                return r(
                  {},
                  o,
                  (((t = {})[n.type] = [].concat(o[n.type] || [], [
                    r({}, i, this.mapNestedChildrenToProps(n, a))
                  ])),
                  t)
                );
              }),
              (t.prototype.mapObjectTypeChildren = function(e) {
                var t,
                  n,
                  o = e.child,
                  i = e.newProps,
                  a = e.newChildProps,
                  u = e.nestedChildren;
                switch (o.type) {
                  case s.TAG_NAMES.TITLE:
                    return r(
                      {},
                      i,
                      (((t = {})[o.type] = u),
                      (t.titleAttributes = r({}, a)),
                      t)
                    );
                  case s.TAG_NAMES.BODY:
                    return r({}, i, { bodyAttributes: r({}, a) });
                  case s.TAG_NAMES.HTML:
                    return r({}, i, { htmlAttributes: r({}, a) });
                }
                return r({}, i, (((n = {})[o.type] = r({}, a)), n));
              }),
              (t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                var n = r({}, t);
                return (
                  Object.keys(e).forEach(function(t) {
                    var o;
                    n = r({}, n, (((o = {})[t] = e[t]), o));
                  }),
                  n
                );
              }),
              (t.prototype.warnOnInvalidChildren = function(e, t) {
                return !0;
              }),
              (t.prototype.mapChildrenToProps = function(e, t) {
                var n = this,
                  r = {};
                return (
                  i.default.Children.forEach(e, function(e) {
                    if (e && e.props) {
                      var o = e.props,
                        i = o.children,
                        a = f(o, ["children"]),
                        u = (0, l.convertReactPropstoHtmlAttributes)(a);
                      switch ((n.warnOnInvalidChildren(e, i), e.type)) {
                        case s.TAG_NAMES.LINK:
                        case s.TAG_NAMES.META:
                        case s.TAG_NAMES.NOSCRIPT:
                        case s.TAG_NAMES.SCRIPT:
                        case s.TAG_NAMES.STYLE:
                          r = n.flattenArrayTypeChildren({
                            child: e,
                            arrayTypeChildren: r,
                            newChildProps: u,
                            nestedChildren: i
                          });
                          break;
                        default:
                          t = n.mapObjectTypeChildren({
                            child: e,
                            newProps: t,
                            newChildProps: u,
                            nestedChildren: i
                          });
                      }
                    }
                  }),
                  (t = this.mapArrayTypeChildrenToProps(r, t))
                );
              }),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.children,
                  n = f(e, ["children"]),
                  o = r({}, n);
                return (
                  t && (o = this.mapChildrenToProps(t, o)),
                  i.default.createElement(d, o)
                );
              }),
              o(t, null, [
                {
                  key: "canUseDOM",
                  set: function(e) {
                    d.canUseDOM = e;
                  }
                }
              ]),
              t
            );
          })(i.default.Component)),
          (A.propTypes = {
            base: a.default.object,
            bodyAttributes: a.default.object,
            children: a.default.oneOfType([
              a.default.arrayOf(a.default.node),
              a.default.node
            ]),
            defaultTitle: a.default.string,
            defer: a.default.bool,
            encodeSpecialCharacters: a.default.bool,
            htmlAttributes: a.default.object,
            link: a.default.arrayOf(a.default.object),
            meta: a.default.arrayOf(a.default.object),
            noscript: a.default.arrayOf(a.default.object),
            onChangeClientState: a.default.func,
            script: a.default.arrayOf(a.default.object),
            style: a.default.arrayOf(a.default.object),
            title: a.default.string,
            titleAttributes: a.default.object,
            titleTemplate: a.default.string
          }),
          (A.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (A.peek = d.peek),
          (A.rewind = function() {
            var e = d.rewind();
            return (
              e ||
                (e = (0, l.mapStateOnServer)({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {}
                })),
              e
            );
          }),
          h);
      (S.renderStatic = S.rewind), (t.Helmet = S), (t.default = S);
    },
    Vn2l: function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        o = n.n(r),
        i = n("Wbzz"),
        a = n("dI71"),
        u = n("N8DM"),
        c = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(a.a)(t, e),
            (t.prototype.render = function() {
              return o.a.createElement(u.ThemeToggler, null, function(e) {
                var t = e.theme,
                  n = e.toggleTheme;
                return o.a.createElement(
                  "label",
                  null,
                  o.a.createElement("input", {
                    type: "checkbox",
                    onChange: function(e) {
                      return n(e.target.checked ? "dark" : "light");
                    },
                    checked: "dark" === t
                  }),
                  " ",
                  o.a.createElement("strong", null, "Dark mode")
                );
              });
            }),
            t
          );
        })(o.a.Component),
        l = function(e) {
          e.siteTitle;
          return o.a.createElement(
            "nav",
            { class: "menu" },
            o.a.createElement(
              "ul",
              null,
              o.a.createElement(
                "li",
                null,
                o.a.createElement(i.Link, { to: "/" }, "noface(book)")
              ),
              o.a.createElement("li", null, o.a.createElement(c, null))
            )
          );
        };
      t.a = function(e) {
        e.siteTitle;
        var t = e.title,
          n = e.children;
        return o.a.createElement(
          "div",
          { class: "wrapper" },
          o.a.createElement(
            "div",
            { class: "main" },
            o.a.createElement(l, { siteTitle: t }),
            o.a.createElement("main", null, n)
          )
        );
      };
    },
    bmMU: function(e, t, n) {
      "use strict";
      var r = Array.isArray,
        o = Object.keys,
        i = Object.prototype.hasOwnProperty,
        a = "undefined" != typeof Element;
      e.exports = function(e, t) {
        try {
          return (function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              var u,
                c,
                l,
                s = r(t),
                T = r(n);
              if (s && T) {
                if ((c = t.length) != n.length) return !1;
                for (u = c; 0 != u--; ) if (!e(t[u], n[u])) return !1;
                return !0;
              }
              if (s != T) return !1;
              var f = t instanceof Date,
                p = n instanceof Date;
              if (f != p) return !1;
              if (f && p) return t.getTime() == n.getTime();
              var E = t instanceof RegExp,
                d = n instanceof RegExp;
              if (E != d) return !1;
              if (E && d) return t.toString() == n.toString();
              var A = o(t);
              if ((c = A.length) !== o(n).length) return !1;
              for (u = c; 0 != u--; ) if (!i.call(n, A[u])) return !1;
              if (a && t instanceof Element && n instanceof Element)
                return t === n;
              for (u = c; 0 != u--; )
                if (!(("_owner" === (l = A[u]) && t.$$typeof) || e(t[l], n[l])))
                  return !1;
              return !0;
            }
            return t != t && n != n;
          })(e, t);
        } catch (n) {
          if (
            (n.message && n.message.match(/stack|recursion/i)) ||
            -2146828260 === n.number
          )
            return (
              console.warn(
                "Warning: react-fast-compare does not handle circular references.",
                n.name,
                n.message
              ),
              !1
            );
          throw n;
        }
      };
    },
    "hFT/": function(e, t) {
      t.__esModule = !0;
      t.ATTRIBUTE_NAMES = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes"
      };
      var n = (t.TAG_NAMES = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title"
        }),
        r =
          ((t.VALID_TAG_NAMES = Object.keys(n).map(function(e) {
            return n[e];
          })),
          (t.TAG_PROPERTIES = {
            CHARSET: "charset",
            CSS_TEXT: "cssText",
            HREF: "href",
            HTTPEQUIV: "http-equiv",
            INNER_HTML: "innerHTML",
            ITEM_PROP: "itemprop",
            NAME: "name",
            PROPERTY: "property",
            REL: "rel",
            SRC: "src"
          }),
          (t.REACT_TAG_MAP = {
            accesskey: "accessKey",
            charset: "charSet",
            class: "className",
            contenteditable: "contentEditable",
            contextmenu: "contextMenu",
            "http-equiv": "httpEquiv",
            itemprop: "itemProp",
            tabindex: "tabIndex"
          }));
      (t.HELMET_PROPS = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
      }),
        (t.HTML_TAG_MAP = Object.keys(r).reduce(function(e, t) {
          return (e[r[t]] = t), e;
        }, {})),
        (t.SELF_CLOSING_TAGS = [n.NOSCRIPT, n.SCRIPT, n.STYLE]),
        (t.HELMET_ATTRIBUTE = "data-react-helmet");
    },
    lSNA: function(e, t) {
      e.exports = function(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      };
    },
    v1p5: function(e, t, n) {
      (function(e) {
        (t.__esModule = !0),
          (t.warn = t.requestAnimationFrame = t.reducePropsToState = t.mapStateOnServer = t.handleClientStateChange = t.convertReactPropstoHtmlAttributes = void 0);
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          o =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          i = c(n("q1tI")),
          a = c(n("6qGY")),
          u = n("hFT/");
        function c(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var l,
          s = function(e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;");
          },
          T = function(e) {
            var t = A(e, u.TAG_NAMES.TITLE),
              n = A(e, u.HELMET_PROPS.TITLE_TEMPLATE);
            if (n && t)
              return n.replace(/%s/g, function() {
                return t;
              });
            var r = A(e, u.HELMET_PROPS.DEFAULT_TITLE);
            return t || r || void 0;
          },
          f = function(e) {
            return A(e, u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {};
          },
          p = function(e, t) {
            return t
              .filter(function(t) {
                return void 0 !== t[e];
              })
              .map(function(t) {
                return t[e];
              })
              .reduce(function(e, t) {
                return o({}, e, t);
              }, {});
          },
          E = function(e, t) {
            return t
              .filter(function(e) {
                return void 0 !== e[u.TAG_NAMES.BASE];
              })
              .map(function(e) {
                return e[u.TAG_NAMES.BASE];
              })
              .reverse()
              .reduce(function(t, n) {
                if (!t.length)
                  for (var r = Object.keys(n), o = 0; o < r.length; o++) {
                    var i = r[o].toLowerCase();
                    if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                  }
                return t;
              }, []);
          },
          d = function(e, t, n) {
            var o = {};
            return n
              .filter(function(t) {
                return (
                  !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    _(
                      "Helmet: " +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        r(t[e]) +
                        '"'
                    ),
                  !1)
                );
              })
              .map(function(t) {
                return t[e];
              })
              .reverse()
              .reduce(function(e, n) {
                var r = {};
                n.filter(function(e) {
                  for (
                    var n = void 0, i = Object.keys(e), a = 0;
                    a < i.length;
                    a++
                  ) {
                    var c = i[a],
                      l = c.toLowerCase();
                    -1 === t.indexOf(l) ||
                      (n === u.TAG_PROPERTIES.REL &&
                        "canonical" === e[n].toLowerCase()) ||
                      (l === u.TAG_PROPERTIES.REL &&
                        "stylesheet" === e[l].toLowerCase()) ||
                      (n = l),
                      -1 === t.indexOf(c) ||
                        (c !== u.TAG_PROPERTIES.INNER_HTML &&
                          c !== u.TAG_PROPERTIES.CSS_TEXT &&
                          c !== u.TAG_PROPERTIES.ITEM_PROP) ||
                        (n = c);
                  }
                  if (!n || !e[n]) return !1;
                  var s = e[n].toLowerCase();
                  return (
                    o[n] || (o[n] = {}),
                    r[n] || (r[n] = {}),
                    !o[n][s] && ((r[n][s] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function(t) {
                    return e.push(t);
                  });
                for (var i = Object.keys(r), c = 0; c < i.length; c++) {
                  var l = i[c],
                    s = (0, a.default)({}, o[l], r[l]);
                  o[l] = s;
                }
                return e;
              }, [])
              .reverse();
          },
          A = function(e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.hasOwnProperty(t)) return r[t];
            }
            return null;
          },
          h =
            ((l = Date.now()),
            function(e) {
              var t = Date.now();
              t - l > 16
                ? ((l = t), e(t))
                : setTimeout(function() {
                    h(e);
                  }, 0);
            }),
          m = function(e) {
            return clearTimeout(e);
          },
          S =
            "undefined" != typeof window
              ? window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                h
              : e.requestAnimationFrame || h,
          y =
            "undefined" != typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                m
              : e.cancelAnimationFrame || m,
          _ = function(e) {
            return (
              console && "function" == typeof console.warn && console.warn(e)
            );
          },
          b = null,
          v = function(e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              o = e.htmlAttributes,
              i = e.linkTags,
              a = e.metaTags,
              c = e.noscriptTags,
              l = e.onChangeClientState,
              s = e.scriptTags,
              T = e.styleTags,
              f = e.title,
              p = e.titleAttributes;
            g(u.TAG_NAMES.BODY, r), g(u.TAG_NAMES.HTML, o), P(f, p);
            var E = {
                baseTag: M(u.TAG_NAMES.BASE, n),
                linkTags: M(u.TAG_NAMES.LINK, i),
                metaTags: M(u.TAG_NAMES.META, a),
                noscriptTags: M(u.TAG_NAMES.NOSCRIPT, c),
                scriptTags: M(u.TAG_NAMES.SCRIPT, s),
                styleTags: M(u.TAG_NAMES.STYLE, T)
              },
              d = {},
              A = {};
            Object.keys(E).forEach(function(e) {
              var t = E[e],
                n = t.newTags,
                r = t.oldTags;
              n.length && (d[e] = n), r.length && (A[e] = E[e].oldTags);
            }),
              t && t(),
              l(e, d, A);
          },
          R = function(e) {
            return Array.isArray(e) ? e.join("") : e;
          },
          P = function(e, t) {
            void 0 !== e && document.title !== e && (document.title = R(e)),
              g(u.TAG_NAMES.TITLE, t);
          },
          g = function(e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
              for (
                var r = n.getAttribute(u.HELMET_ATTRIBUTE),
                  o = r ? r.split(",") : [],
                  i = [].concat(o),
                  a = Object.keys(t),
                  c = 0;
                c < a.length;
                c++
              ) {
                var l = a[c],
                  s = t[l] || "";
                n.getAttribute(l) !== s && n.setAttribute(l, s),
                  -1 === o.indexOf(l) && o.push(l);
                var T = i.indexOf(l);
                -1 !== T && i.splice(T, 1);
              }
              for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f]);
              o.length === i.length
                ? n.removeAttribute(u.HELMET_ATTRIBUTE)
                : n.getAttribute(u.HELMET_ATTRIBUTE) !== a.join(",") &&
                  n.setAttribute(u.HELMET_ATTRIBUTE, a.join(","));
            }
          },
          M = function(e, t) {
            var n = document.head || document.querySelector(u.TAG_NAMES.HEAD),
              r = n.querySelectorAll(e + "[" + u.HELMET_ATTRIBUTE + "]"),
              o = Array.prototype.slice.call(r),
              i = [],
              a = void 0;
            return (
              t &&
                t.length &&
                t.forEach(function(t) {
                  var n = document.createElement(e);
                  for (var r in t)
                    if (t.hasOwnProperty(r))
                      if (r === u.TAG_PROPERTIES.INNER_HTML)
                        n.innerHTML = t.innerHTML;
                      else if (r === u.TAG_PROPERTIES.CSS_TEXT)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText));
                      else {
                        var c = void 0 === t[r] ? "" : t[r];
                        n.setAttribute(r, c);
                      }
                  n.setAttribute(u.HELMET_ATTRIBUTE, "true"),
                    o.some(function(e, t) {
                      return (a = t), n.isEqualNode(e);
                    })
                      ? o.splice(a, 1)
                      : i.push(n);
                }),
              o.forEach(function(e) {
                return e.parentNode.removeChild(e);
              }),
              i.forEach(function(e) {
                return n.appendChild(e);
              }),
              { oldTags: o, newTags: i }
            );
          },
          O = function(e) {
            return Object.keys(e).reduce(function(t, n) {
              var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
              return t ? t + " " + r : r;
            }, "");
          },
          w = function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function(t, n) {
              return (t[u.REACT_TAG_MAP[n] || n] = e[n]), t;
            }, t);
          },
          C = function(e, t, n) {
            switch (e) {
              case u.TAG_NAMES.TITLE:
                return {
                  toComponent: function() {
                    return (
                      (e = t.title),
                      (n = t.titleAttributes),
                      ((r = { key: e })[u.HELMET_ATTRIBUTE] = !0),
                      (o = w(n, r)),
                      [i.default.createElement(u.TAG_NAMES.TITLE, o, e)]
                    );
                    var e, n, r, o;
                  },
                  toString: function() {
                    return (function(e, t, n, r) {
                      var o = O(n),
                        i = R(t);
                      return o
                        ? "<" +
                            e +
                            " " +
                            u.HELMET_ATTRIBUTE +
                            '="true" ' +
                            o +
                            ">" +
                            s(i, r) +
                            "</" +
                            e +
                            ">"
                        : "<" +
                            e +
                            " " +
                            u.HELMET_ATTRIBUTE +
                            '="true">' +
                            s(i, r) +
                            "</" +
                            e +
                            ">";
                    })(e, t.title, t.titleAttributes, n);
                  }
                };
              case u.ATTRIBUTE_NAMES.BODY:
              case u.ATTRIBUTE_NAMES.HTML:
                return {
                  toComponent: function() {
                    return w(t);
                  },
                  toString: function() {
                    return O(t);
                  }
                };
              default:
                return {
                  toComponent: function() {
                    return (function(e, t) {
                      return t.map(function(t, n) {
                        var r,
                          o = (((r = { key: n })[u.HELMET_ATTRIBUTE] = !0), r);
                        return (
                          Object.keys(t).forEach(function(e) {
                            var n = u.REACT_TAG_MAP[e] || e;
                            if (
                              n === u.TAG_PROPERTIES.INNER_HTML ||
                              n === u.TAG_PROPERTIES.CSS_TEXT
                            ) {
                              var r = t.innerHTML || t.cssText;
                              o.dangerouslySetInnerHTML = { __html: r };
                            } else o[n] = t[e];
                          }),
                          i.default.createElement(e, o)
                        );
                      });
                    })(e, t);
                  },
                  toString: function() {
                    return (function(e, t, n) {
                      return t.reduce(function(t, r) {
                        var o = Object.keys(r)
                            .filter(function(e) {
                              return !(
                                e === u.TAG_PROPERTIES.INNER_HTML ||
                                e === u.TAG_PROPERTIES.CSS_TEXT
                              );
                            })
                            .reduce(function(e, t) {
                              var o =
                                void 0 === r[t]
                                  ? t
                                  : t + '="' + s(r[t], n) + '"';
                              return e ? e + " " + o : o;
                            }, ""),
                          i = r.innerHTML || r.cssText || "",
                          a = -1 === u.SELF_CLOSING_TAGS.indexOf(e);
                        return (
                          t +
                          "<" +
                          e +
                          " " +
                          u.HELMET_ATTRIBUTE +
                          '="true" ' +
                          o +
                          (a ? "/>" : ">" + i + "</" + e + ">")
                        );
                      }, "");
                    })(e, t, n);
                  }
                };
            }
          };
        (t.convertReactPropstoHtmlAttributes = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function(t, n) {
            return (t[u.HTML_TAG_MAP[n] || n] = e[n]), t;
          }, t);
        }),
          (t.handleClientStateChange = function(e) {
            b && y(b),
              e.defer
                ? (b = S(function() {
                    v(e, function() {
                      b = null;
                    });
                  }))
                : (v(e), (b = null));
          }),
          (t.mapStateOnServer = function(e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              o = e.htmlAttributes,
              i = e.linkTags,
              a = e.metaTags,
              c = e.noscriptTags,
              l = e.scriptTags,
              s = e.styleTags,
              T = e.title,
              f = void 0 === T ? "" : T,
              p = e.titleAttributes;
            return {
              base: C(u.TAG_NAMES.BASE, t, r),
              bodyAttributes: C(u.ATTRIBUTE_NAMES.BODY, n, r),
              htmlAttributes: C(u.ATTRIBUTE_NAMES.HTML, o, r),
              link: C(u.TAG_NAMES.LINK, i, r),
              meta: C(u.TAG_NAMES.META, a, r),
              noscript: C(u.TAG_NAMES.NOSCRIPT, c, r),
              script: C(u.TAG_NAMES.SCRIPT, l, r),
              style: C(u.TAG_NAMES.STYLE, s, r),
              title: C(u.TAG_NAMES.TITLE, { title: f, titleAttributes: p }, r)
            };
          }),
          (t.reducePropsToState = function(e) {
            return {
              baseTag: E([u.TAG_PROPERTIES.HREF], e),
              bodyAttributes: p(u.ATTRIBUTE_NAMES.BODY, e),
              defer: A(e, u.HELMET_PROPS.DEFER),
              encode: A(e, u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
              htmlAttributes: p(u.ATTRIBUTE_NAMES.HTML, e),
              linkTags: d(
                u.TAG_NAMES.LINK,
                [u.TAG_PROPERTIES.REL, u.TAG_PROPERTIES.HREF],
                e
              ),
              metaTags: d(
                u.TAG_NAMES.META,
                [
                  u.TAG_PROPERTIES.NAME,
                  u.TAG_PROPERTIES.CHARSET,
                  u.TAG_PROPERTIES.HTTPEQUIV,
                  u.TAG_PROPERTIES.PROPERTY,
                  u.TAG_PROPERTIES.ITEM_PROP
                ],
                e
              ),
              noscriptTags: d(
                u.TAG_NAMES.NOSCRIPT,
                [u.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              onChangeClientState: f(e),
              scriptTags: d(
                u.TAG_NAMES.SCRIPT,
                [u.TAG_PROPERTIES.SRC, u.TAG_PROPERTIES.INNER_HTML],
                e
              ),
              styleTags: d(u.TAG_NAMES.STYLE, [u.TAG_PROPERTIES.CSS_TEXT], e),
              title: T(e),
              titleAttributes: p(u.ATTRIBUTE_NAMES.TITLE, e)
            };
          }),
          (t.requestAnimationFrame = S),
          (t.warn = _);
      }.call(this, n("yLpj")));
    },
    vrFN: function(e, t, n) {
      "use strict";
      var r = n("q1tI"),
        o = n.n(r),
        i = n("TJpk"),
        a = n("Wbzz"),
        u = function(e) {
          var t = e.description,
            n = e.lang,
            r = e.meta,
            u = e.title,
            c = Object(a.useStaticQuery)("3000541721").site,
            l = t || c.siteMetadata.description;
          return o.a.createElement(i.Helmet, {
            htmlAttributes: { lang: n },
            title: u,
            titleTemplate: "%s | " + c.siteMetadata.title,
            meta: [
              { name: "description", content: l },
              { property: "og:title", content: u },
              { property: "og:description", content: l },
              { property: "og:type", content: "website" }
            ].concat(r)
          });
        };
      (u.defaultProps = { lang: "en", meta: [], description: "" }), (t.a = u);
    },
    yLpj: function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    }
  }
]);
//# sourceMappingURL=d5d7a013bc6c1e2b6d7db819052c16d7efea5559-1839cf011644d0a59856.js.map
