(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    yZlL: function(e, t, a) {
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
        m = a.n(o),
        d =
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
                  m.a,
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
              a = (e.pageContext, e.location),
              r = t.site.siteMetadata.title,
              o = t.markdownRemark;
            return n.createElement(
              s.a,
              { location: a, title: r },
              n.createElement(
                "header",
                null,
                n.createElement(
                  d,
                  {
                    title: o.frontmatter.title,
                    date: o.frontmatter.date,
                    background:
                      o.frontmatter.featuredImage.childImageSharp.fluid
                  },
                  o.frontmatter.description
                )
              ),
              n.createElement(
                c.a,
                null,
                n.createElement(i.a, {
                  title: o.frontmatter.title,
                  description: o.frontmatter.description || o.excerpt
                }),
                n.createElement(
                  "article",
                  null,
                  n.createElement("section", {
                    dangerouslySetInnerHTML: { __html: o.html }
                  }),
                  n.createElement("hr", null)
                ),
                n.createElement(
                  "nav",
                  null,
                  n.createElement(l.Link, { to: "/" }, "← Back")
                )
              )
            );
          }),
          "1597611402");
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-565d02dec0bc81d0b6f5.js.map
