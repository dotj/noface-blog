(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
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
        s = a("1eu9"),
        i = a.n(s),
        o =
          (a("qVcT"),
          function(e) {
            var t = e.title,
              a = e.date,
              l = e.background,
              n = e.children,
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
                (c = r.a.createElement(
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
              c
            );
          }),
        m = a("Vn2l"),
        d = a("vrFN"),
        u =
          ((t.default = function(e) {
            var t = e.data,
              a = (e.pageContext, e.location),
              r = t.site.siteMetadata.title,
              s = t.markdownRemark;
            return n.createElement(
              m.a,
              { location: a, title: r },
              n.createElement(
                "header",
                null,
                n.createElement(
                  o,
                  {
                    title: s.frontmatter.title,
                    date: s.frontmatter.date,
                    background:
                      s.frontmatter.featuredImage.childImageSharp.fluid
                  },
                  s.frontmatter.description
                )
              ),
              n.createElement(
                c.a,
                null,
                n.createElement(d.a, {
                  title: s.frontmatter.title,
                  description: s.frontmatter.description || s.excerpt
                }),
                n.createElement(
                  "article",
                  null,
                  n.createElement("section", {
                    dangerouslySetInnerHTML: { __html: s.html }
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
//# sourceMappingURL=component---src-templates-blog-post-js-2ae9709722658fca8eff.js.map
