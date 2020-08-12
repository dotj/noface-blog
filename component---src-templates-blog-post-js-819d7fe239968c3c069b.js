(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    yZlL: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return c;
        });
      var l = n("Wbzz"),
        r = n("q1tI"),
        a = n("Bl7J"),
        i = n("vrFN"),
        o = n("ClGB");
      t.default = function(e) {
        var t = e.data,
          n = e.pageContext,
          c = e.location,
          m = t.markdownRemark,
          u = t.site.siteMetadata.title,
          d = n.previous,
          s = n.next;
        return r.createElement(
          a.a,
          { location: c, title: u },
          r.createElement(i.a, {
            title: m.frontmatter.title,
            description: m.frontmatter.description || m.excerpt
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
                  title: m.frontmatter.title,
                  background: m.frontmatter.featuredImage.childImageSharp.fluid
                },
                m.frontmatter.description,
                "-",
                m.frontmatter.date
              )
            ),
            r.createElement("section", {
              dangerouslySetInnerHTML: { __html: m.html }
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
                d &&
                  r.createElement(
                    l.Link,
                    { to: d.fields.slug, rel: "prev" },
                    "← ",
                    d.frontmatter.title
                  )
              ),
              r.createElement(
                "li",
                null,
                s &&
                  r.createElement(
                    l.Link,
                    { to: s.fields.slug, rel: "next" },
                    s.frontmatter.title,
                    " →"
                  )
              )
            )
          )
        );
      };
      var c = "2245358671";
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-819d7fe239968c3c069b.js.map
