(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    yZlL: function(e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "pageQuery", function() {
          return c;
        });
      var l = r("Wbzz"),
        n = r("q1tI"),
        a = r("Bl7J"),
        i = r("vrFN"),
        o = r("ClGB");
      t.default = function(e) {
        var t = e.data,
          r = e.pageContext,
          c = e.location,
          m = t.markdownRemark,
          u = t.site.siteMetadata.title,
          d = r.previous,
          f = r.next;
        return n.createElement(
          a.a,
          { location: c, title: u },
          n.createElement(i.a, {
            title: m.frontmatter.title,
            description: m.frontmatter.description || m.excerpt
          }),
          n.createElement(
            "article",
            null,
            n.createElement(
              "header",
              null,
              n.createElement(
                o.a,
                {
                  title: m.frontmatter.title,
                  background: m.frontmatter.featuredImage.childImageSharp.fluid
                },
                n.createElement(Img, {
                  fluid: m.frontmatter.featuredImage.childImageSharp.fluid
                }),
                m.frontmatter.description,
                "-",
                m.frontmatter.date
              )
            ),
            n.createElement("section", {
              dangerouslySetInnerHTML: { __html: m.html }
            }),
            n.createElement("hr", null)
          ),
          n.createElement(
            "nav",
            null,
            n.createElement(
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
              n.createElement(
                "li",
                null,
                d &&
                  n.createElement(
                    l.Link,
                    { to: d.fields.slug, rel: "prev" },
                    "← ",
                    d.frontmatter.title
                  )
              ),
              n.createElement(
                "li",
                null,
                f &&
                  n.createElement(
                    l.Link,
                    { to: f.fields.slug, rel: "next" },
                    f.frontmatter.title,
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
//# sourceMappingURL=component---src-templates-blog-post-js-c7e0f68abb7a67bcaea5.js.map
