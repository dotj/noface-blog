(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    yZlL: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return u;
        });
      var l = n("Wbzz"),
        r = n("q1tI"),
        a = n("X3x9"),
        i = n("Vn2l"),
        c = n("vrFN"),
        o = n("ClGB"),
        m = n("sbuA");
      t.default = function(e) {
        var t = e.data,
          n = e.pageContext,
          u = e.location,
          d = t.markdownRemark,
          s = t.site.siteMetadata.title,
          f = n.previous,
          p = n.next;
        return r.createElement(
          i.a,
          null,
          r.createElement(
            a.a,
            { location: u, title: s },
            r.createElement(m.a, null),
            r.createElement(c.a, {
              title: d.frontmatter.title,
              description: d.frontmatter.description || d.excerpt
            }),
            r.createElement(
              "article",
              null,
              r.createElement(
                "header",
                null,
                r.createElement(
                  o.a,
                  {
                    title: d.frontmatter.title,
                    date: d.frontmatter.date,
                    background:
                      d.frontmatter.featuredImage.childImageSharp.fluid
                  },
                  d.frontmatter.description
                )
              ),
              r.createElement("section", {
                dangerouslySetInnerHTML: { __html: d.html }
              }),
              r.createElement("hr", null)
            ),
            r.createElement(
              "nav",
              null,
              r.createElement(
                "ul",
                {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    listStyle: "none",
                    padding: 0
                  }
                },
                r.createElement(
                  "li",
                  null,
                  f &&
                    r.createElement(
                      l.Link,
                      { to: f.fields.slug, rel: "prev" },
                      "← ",
                      f.frontmatter.title
                    )
                ),
                r.createElement(
                  "li",
                  null,
                  p &&
                    r.createElement(
                      l.Link,
                      { to: p.fields.slug, rel: "next" },
                      p.frontmatter.title,
                      " →"
                    )
                )
              )
            )
          )
        );
      };
      var u = "2245358671";
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-5c29ff53398315f4ec9f.js.map
