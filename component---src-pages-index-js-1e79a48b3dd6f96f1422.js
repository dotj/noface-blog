(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
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
        s = a("X3x9"),
        c = a("Vn2l"),
        i = a("vrFN"),
        o = a("1eu9"),
        d = a.n(o),
        m =
          (a("qVcT"),
          function(e) {
            var t = e.title,
              a = e.date,
              n = e.background,
              s = e.children,
              c = r.a.createElement(
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
                      s
                    )
                  )
                )
              );
            return (
              n &&
                (c = r.a.createElement(
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
                        s
                      ),
                      r.a.createElement("p", { class: "detail" }, a)
                    )
                  )
                )),
              c
            );
          }),
        u =
          ((t.default = function(e) {
            var t = e.data,
              a = e.location,
              n = t.site.siteMetadata.title,
              o = t.allMarkdownRemark.edges;
            return r.a.createElement(
              c.a,
              { siteTitle: n, location: a },
              r.a.createElement(
                m,
                { title: n },
                "A blog on tech and equity. Also known as: no fac(ial recognition technology under our neoliberal regim)e."
              ),
              r.a.createElement(i.a, { title: "All posts" }),
              r.a.createElement(
                s.a,
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
//# sourceMappingURL=component---src-pages-index-js-1e79a48b3dd6f96f1422.js.map
