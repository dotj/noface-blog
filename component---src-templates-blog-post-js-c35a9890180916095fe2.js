(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    yZlL: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return m;
        });
      var n = a("Wbzz"),
        r = a("q1tI"),
        l = a("X3x9"),
        c = a("Vn2l"),
        i = a("vrFN"),
        o = a("ClGB");
      t.default = function(e) {
        var t = e.data,
          a = (e.pageContext, e.location),
          m = t.site.siteMetadata.title,
          d = t.markdownRemark;
        return r.createElement(
          c.a,
          { location: a, title: m },
          r.createElement(
            "header",
            null,
            r.createElement(
              o.a,
              {
                title: d.frontmatter.title,
                date: d.frontmatter.date,
                background: d.frontmatter.featuredImage.childImageSharp.fluid
              },
              d.frontmatter.description
            )
          ),
          r.createElement(
            l.a,
            null,
            r.createElement(i.a, {
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
              r.createElement(n.Link, { to: "/" }, "← Back")
            )
          )
        );
      };
      var m = "1597611402";
    }
  }
]);
//# sourceMappingURL=component---src-templates-blog-post-js-c35a9890180916095fe2.js.map
