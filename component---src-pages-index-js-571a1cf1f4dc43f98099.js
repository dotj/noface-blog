(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return u;
        });
      var l = a("Wbzz"),
        n = a("q1tI"),
        r = a.n(n),
        c = a("X3x9"),
        s = a("Vn2l"),
        i = a("vrFN"),
        o = a("1eu9"),
        d = a.n(o),
        m =
          (a("qVcT"),
          function(e) {
            var t = e.title,
              a = e.date,
              n = e.background,
              c = e.children,
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
                      r.a.createElement(l.Link, { to: "/" }, t)
                    ),
                    r.a.createElement(
                      "p",
                      { class: "splash-title-subheader" },
                      c
                    )
                  )
                )
              );
            return (
              n &&
                (s = r.a.createElement(
                  d.a,
                  {
                    Tag: "section",
                    fluid: n,
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
                        r.a.createElement(l.Link, { to: "/" }, t)
                      ),
                      r.a.createElement(
                        "p",
                        { class: "splash-title-subheader" },
                        c
                      ),
                      r.a.createElement("p", { class: "detail" }, a)
                    )
                  )
                )),
              s
            );
          }),
        u =
          ((t.default = function(e) {
            var t = e.data,
              a = e.location,
              n = t.site.siteMetadata.title,
              o = t.allMarkdownRemark.edges;
            return r.a.createElement(
              s.a,
              { location: a },
              r.a.createElement(
                m,
                { title: n },
                "A blog on tech and equity. Also known as: no fac(ial recognition technology under our neoliberal regim)e."
              ),
              r.a.createElement(i.a, { title: "All posts" }),
              r.a.createElement(
                c.a,
                null,
                o.map(function(e) {
                  var t = e.node,
                    a = t.frontmatter.title || t.fields.slug;
                  return r.a.createElement(
                    "article",
                    { key: t.fields.slug },
                    r.a.createElement(
                      "header",
                      null,
                      r.a.createElement(
                        "h2",
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
//# sourceMappingURL=component---src-pages-index-js-571a1cf1f4dc43f98099.js.map
