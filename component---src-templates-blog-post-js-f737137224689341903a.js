(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    yZlL: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return m;
        });
      var l = n("Wbzz"),
        r = n("q1tI"),
        a = n("X3x9"),
        i = n("Vn2l"),
        o = n("vrFN"),
        c = n("ClGB");
      t.default = function(e) {
        var t = e.data,
          n = e.pageContext,
          m = e.location,
          u = t.site.siteMetadata.title,
          d = t.markdownRemark,
          s = n.previous,
          f = n.next;
        return r.createElement(
          i.a,
          { location: m, title: u },
          r.createElement(
            "header",
            null,
            r.createElement(
              c.a,
              {
                title: d.frontmatter.title,
                date: d.frontmatter.date,
                background: d.frontmatter.featuredImage.childImageSharp.fluid
              },
              d.frontmatter.description
            )
          ),
          r.createElement(
            a.a,
            null,
            r.createElement(o.a, {
              title: d.frontmatter.title,
              description: d.frontmatter.description || d.excerpt
            }),
            r.createElement(
              "article",
              null,
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
                  s &&
                    r.createElement(
                      l.Link,
                      { to: s.fields.slug, rel: "prev" },
                      "← ",
                      s.frontmatter.title
                    )
                ),
                r.createElement(
                  "li",
                  null,
                  f &&
                    r.createElement(
                      l.Link,
                      { to: f.fields.slug, rel: "next" },
                      f.frontmatter.title,
                      " →"
                    )
                )
              )
            )
          )
        );
      };
      var m = "1597611402";
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-f737137224689341903a.js.map
