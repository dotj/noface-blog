(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return m;
        });
      var l = a("Wbzz"),
        n = a("q1tI"),
        r = a.n(n),
        s = a("X3x9"),
        c = a("1eu9"),
        i = a.n(c),
        o =
          (a("qVcT"),
          function(e) {
            var t = e.title,
              a = e.date,
              l = e.background,
              n = e.children,
              s = r.a.createElement(
                "div",
                { class: "splash-title" },
                r.a.createElement(
                  "center",
                  null,
                  r.a.createElement(
                    "div",
                    { class: "splash-console" },
                    r.a.createElement(
                      "h1",
                      { class: "splash-title-header" },
                      t
                    ),
                    r.a.createElement(
                      "p",
                      { class: "splash-title-subheader" },
                      n
                    )
                  )
                )
              );
            return (
              l &&
                (s = r.a.createElement(
                  i.a,
                  {
                    Tag: "section",
                    fluid: l,
                    className: "splash-title",
                    backgroundPosition: "center"
                  },
                  r.a.createElement(
                    "center",
                    null,
                    r.a.createElement(
                      "div",
                      { class: "splash-console" },
                      r.a.createElement(
                        "h1",
                        { class: "splash-title-header" },
                        t
                      ),
                      r.a.createElement(
                        "p",
                        { class: "splash-title-subheader" },
                        n
                      ),
                      r.a.createElement("p", { class: "detail" }, a)
                    )
                  )
                )),
              s
            );
          }),
        d = a("Vn2l"),
        u = a("vrFN"),
        m =
          ((t.default = function(e) {
            var t = e.data,
              a = e.location,
              n = t.site.siteMetadata.title,
              c = t.allMarkdownRemark.edges;
            return r.a.createElement(
              d.a,
              { location: a },
              r.a.createElement(
                o,
                { title: n },
                "A blog on tech and equity. Also known as: no fac(ial recognition technology under our neoliberal regim)e."
              ),
              r.a.createElement(u.a, { title: "All posts" }),
              r.a.createElement(
                s.a,
                null,
                c.map(function(e) {
                  var t = e.node,
                    a = t.frontmatter.title || t.fields.slug;
                  return r.a.createElement(
                    "article",
                    { key: t.fields.slug },
                    r.a.createElement(
                      "header",
                      null,
                      r.a.createElement(
                        "h3",
                        null,
                        r.a.createElement(l.Link, { to: t.fields.slug }, a)
                      )
                    ),
                    r.a.createElement(
                      "p",
                      { class: "detail" },
                      t.frontmatter.date
                    ),
                    r.a.createElement(
                      "section",
                      null,
                      r.a.createElement("p", {
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
//# sourceMappingURL=component---src-pages-index-js-38cf74e5a6b8b1bad8c4.js.map
