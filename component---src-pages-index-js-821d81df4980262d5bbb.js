(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    RXBc: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return u;
        });
      var n = a("Wbzz"),
        l = a("q1tI"),
        r = a.n(l),
        c = a("X3x9"),
        i = a("Vn2l"),
        o = a("vrFN"),
        s = a("ClGB");
      t.default = function(e) {
        var t = e.data,
          a = e.location,
          l = t.site.siteMetadata.title,
          u = t.allMarkdownRemark.edges;
        return r.a.createElement(
          i.a,
          { location: a },
          r.a.createElement(
            s.a,
            { title: l },
            'a.k.a. "no fac(ial recognition technology under our neoliberal regim)e"'
          ),
          r.a.createElement(o.a, { title: "All posts" }),
          r.a.createElement(
            c.a,
            null,
            u.map(function(e) {
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
                r.a.createElement("p", { class: "detail" }, t.frontmatter.date),
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
      var u = "3202274054";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-821d81df4980262d5bbb.js.map
