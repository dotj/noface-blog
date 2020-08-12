(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return m;
        });
      var n = a("Wbzz"),
        l = a("q1tI"),
        r = a.n(l),
        o = a("X3x9"),
        c = a("Vn2l"),
        i = a("vrFN"),
        u = a("ClGB"),
        s = a("sbuA");
      t.default = function(e) {
        var t = e.data,
          a = e.location,
          l = t.site.siteMetadata.title,
          m = t.allMarkdownRemark.edges;
        return r.a.createElement(
          c.a,
          { location: a },
          r.a.createElement(s.a, null),
          r.a.createElement(
            u.a,
            { title: l },
            'a.k.a. "no fac(ial recognition technology under our neoliberal regim)e"'
          ),
          r.a.createElement(i.a, { title: "All posts" }),
          r.a.createElement(
            o.a,
            null,
            m.map(function(e) {
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
                    r.a.createElement(n.Link, { to: t.fields.slug }, a)
                  )
                ),
                t.frontmatter.date,
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
      };
      var m = "3202274054";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-4f396612e337beef9b8a.js.map
