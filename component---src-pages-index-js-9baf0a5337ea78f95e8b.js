(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    N8DM: function(e, t, n) {
      "use strict";
      var a = n("TqRt");
      t.__esModule = !0;
      var r = a(n("QL1J"));
      t.ThemeToggler = r.default;
    },
    QL1J: function(e, t, n) {
      "use strict";
      var a = n("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var r = a(n("PJYZ")),
        l = a(n("VbXa")),
        o = a(n("lSNA")),
        i = a(n("q1tI")),
        c = a(n("17x9")),
        u = (function(e) {
          function t() {
            for (
              var t, n = arguments.length, a = new Array(n), l = 0;
              l < n;
              l++
            )
              a[l] = arguments[l];
            return (
              (t = e.call.apply(e, [this].concat(a)) || this),
              (0, o.default)((0, r.default)(t), "state", {
                theme: "undefined" != typeof window ? window.__theme : null
              }),
              t
            );
          }
          (0, l.default)(t, e);
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
              return i.default.createElement(this.props.children, {
                theme: this.state.theme,
                toggleTheme: this.toggleTheme
              });
            }),
            t
          );
        })(i.default.Component);
      u.propTypes = { children: c.default.func.isRequired };
      var d = u;
      t.default = d;
    },
    RXBc: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return f;
        });
      var a = n("Wbzz"),
        r = n("q1tI"),
        l = n.n(r),
        o = function(e) {
          var t = e.title,
            n = e.children,
            r = l.a.createElement(
              "h1",
              null,
              l.a.createElement(a.Link, { to: "/" }, t)
            );
          return l.a.createElement(
            "div",
            { class: "content" },
            l.a.createElement("header", null, r),
            l.a.createElement("main", null, n)
          );
        },
        i = n("Bl7J"),
        c = n("vrFN"),
        u = n("ClGB"),
        d = n("dI71"),
        m = n("N8DM"),
        s = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(d.a)(t, e),
            (t.prototype.render = function() {
              return l.a.createElement(m.ThemeToggler, null, function(e) {
                var t = e.theme,
                  n = e.toggleTheme;
                return l.a.createElement(
                  "label",
                  null,
                  l.a.createElement("input", {
                    type: "checkbox",
                    onChange: function(e) {
                      return n(e.target.checked ? "dark" : "light");
                    },
                    checked: "dark" === t
                  }),
                  " ",
                  "Dark mode toggle"
                );
              });
            }),
            t
          );
        })(l.a.Component),
        f =
          ((t.default = function(e) {
            var t = e.data,
              n = e.location,
              r = t.site.siteMetadata.title,
              d = t.allMarkdownRemark.edges;
            return l.a.createElement(
              i.a,
              { location: n },
              l.a.createElement(
                u.a,
                { title: r },
                "(a.k.a. no fac(ial recognition technology under our neoliberal regim)e)"
              ),
              l.a.createElement(s, null),
              l.a.createElement(c.a, { title: "All posts" }),
              l.a.createElement(
                o,
                null,
                d.map(function(e) {
                  var t = e.node,
                    n = t.frontmatter.title || t.fields.slug;
                  return l.a.createElement(
                    "article",
                    { key: t.fields.slug },
                    l.a.createElement(
                      "header",
                      null,
                      l.a.createElement(
                        "h3",
                        null,
                        l.a.createElement(a.Link, { to: t.fields.slug }, n)
                      )
                    ),
                    t.frontmatter.date,
                    l.a.createElement(
                      "section",
                      null,
                      l.a.createElement("p", {
                        dangerouslySetInnerHTML: {
                          __html: t.frontmatter.description || t.excerpt
                        }
                      })
                    )
                  );
                })
              )
            );
          }),
          "3202274054");
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-9baf0a5337ea78f95e8b.js.map
