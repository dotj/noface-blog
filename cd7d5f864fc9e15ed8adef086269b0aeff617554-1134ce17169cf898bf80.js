(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "9eSz": function(e, t, a) {
      "use strict";
      var r = a("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var i,
        n = r(a("PJYZ")),
        s = r(a("VbXa")),
        d = r(a("8OQS")),
        l = r(a("pVnL")),
        o = r(a("q1tI")),
        u = r(a("17x9")),
        c = function(e) {
          var t = (0, l.default)({}, e),
            a = t.resolutions,
            r = t.sizes,
            i = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            r && ((t.fluid = r), delete t.sizes),
            i && (t.loading = "eager"),
            t.fluid && (t.fluid = w([].concat(t.fluid))),
            t.fixed && (t.fixed = w([].concat(t.fixed))),
            t
          );
        },
        f = function(e) {
          var t = e.media;
          return !!t && y && !!window.matchMedia(t).matches;
        },
        g = function(e) {
          var t = e.fluid,
            a = e.fixed,
            r = p(t || a || []);
          return r && r.src;
        },
        p = function(e) {
          if (
            y &&
            (function(e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function(e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var a = e.findIndex(function(e) {
              return void 0 === e.media;
            });
            if (-1 !== a) return e[a];
          }
          return e[0];
        },
        h = Object.create({}),
        m = function(e) {
          var t = c(e),
            a = g(t);
          return h[a] || !1;
        },
        b =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        y = "undefined" != typeof window,
        S = y && window.IntersectionObserver,
        v = new WeakMap();
      function E(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.srcSet,
            r = e.srcSetWebp,
            i = e.media,
            n = e.sizes;
          return o.default.createElement(
            o.default.Fragment,
            { key: t },
            r &&
              o.default.createElement("source", {
                type: "image/webp",
                media: i,
                srcSet: r,
                sizes: n
              }),
            o.default.createElement("source", { media: i, srcSet: a, sizes: n })
          );
        });
      }
      function w(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function L(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.tracedSVG;
          return o.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function R(e) {
        return e.map(function(e) {
          var t = e.src,
            a = e.media,
            r = e.base64;
          return o.default.createElement("source", {
            key: t,
            media: a,
            srcSet: r
          });
        });
      }
      function I(e, t) {
        var a = e.srcSet,
          r = e.srcSetWebp,
          i = e.media,
          n = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (i ? 'media="' + i + '" ' : "") +
          'srcset="' +
          (t ? r : a) +
          '" ' +
          (n ? 'sizes="' + n + '" ' : "") +
          "/>"
        );
      }
      var z = function(e, t) {
          var a =
            (void 0 === i &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (i = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (i.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            i);
          return (
            a && (a.observe(e), v.set(e, t)),
            function() {
              a.unobserve(e), v.delete(e);
            }
          );
        },
        O = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            r = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            i = e.title ? 'title="' + e.title + '" ' : "",
            n = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            s = e.width ? 'width="' + e.width + '" ' : "",
            d = e.height ? 'height="' + e.height + '" ' : "",
            l = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            o = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? I(e, !0) : "") + I(e);
              })
              .join("") +
            "<img " +
            o +
            s +
            d +
            a +
            r +
            t +
            n +
            i +
            l +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        x = o.default.forwardRef(function(e, t) {
          var a = e.src,
            r = e.imageVariants,
            i = e.generateSources,
            n = e.spreadProps,
            s = e.ariaHidden,
            d = o.default.createElement(
              V,
              (0, l.default)({ ref: t, src: a }, n, { ariaHidden: s })
            );
          return r.length > 1
            ? o.default.createElement("picture", null, i(r), d)
            : d;
        }),
        V = o.default.forwardRef(function(e, t) {
          var a = e.sizes,
            r = e.srcSet,
            i = e.src,
            n = e.style,
            s = e.onLoad,
            u = e.onError,
            c = e.loading,
            f = e.draggable,
            g = e.ariaHidden,
            p = (0, d.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden"
            ]);
          return o.default.createElement(
            "img",
            (0, l.default)(
              { "aria-hidden": g, sizes: a, srcSet: r, src: i },
              p,
              {
                onLoad: s,
                onError: u,
                ref: t,
                loading: c,
                draggable: f,
                style: (0, l.default)(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center"
                  },
                  n
                )
              }
            )
          );
        });
      V.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func
      };
      var k = (function(e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = y && m(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !b && S && !a.isCritical && !a.seenBefore);
          var r = a.isCritical || (y && (b || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn
            }),
            (a.imageRef = o.default.createRef()),
            (a.placeholderRef = t.placeholderRef || o.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, n.default)(a))),
            (a.handleRef = a.handleRef.bind((0, n.default)(a))),
            a
          );
        }
        (0, s.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: m(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function(e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = z(e, function() {
                var e = m(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function() {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      )
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function() {
            var e, t, a;
            (e = this.props),
              (t = c(e)),
              (a = g(t)) && (h[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = c(this.props),
              t = e.title,
              a = e.alt,
              r = e.className,
              i = e.style,
              n = void 0 === i ? {} : i,
              s = e.imgStyle,
              d = void 0 === s ? {} : s,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              g = e.placeholderClassName,
              h = e.fluid,
              m = e.fixed,
              b = e.backgroundColor,
              y = e.durationFadeIn,
              S = e.Tag,
              v = e.itemProp,
              w = e.loading,
              I = e.draggable,
              z = !1 === this.state.fadeIn || this.state.imgLoaded,
              k = !0 === this.state.fadeIn && !this.state.imgCached,
              C = (0, l.default)(
                {
                  opacity: z ? 1 : 0,
                  transition: k ? "opacity " + y + "ms" : "none"
                },
                d
              ),
              T = "boolean" == typeof b ? "lightgray" : b,
              H = { transitionDelay: y + "ms" },
              N = (0, l.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                k && H,
                d,
                f
              ),
              P = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: N,
                className: g,
                itemProp: v
              };
            if (h) {
              var W = h,
                q = p(h);
              return o.default.createElement(
                S,
                {
                  className: (r || "") + " gatsby-image-wrapper",
                  style: (0, l.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: q.maxWidth ? q.maxWidth + "px" : null,
                      maxHeight: q.maxHeight ? q.maxHeight + "px" : null
                    },
                    n
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(q.srcSet)
                },
                o.default.createElement(S, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / q.aspectRatio + "%"
                  }
                }),
                T &&
                  o.default.createElement(S, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, l.default)(
                      {
                        backgroundColor: T,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0
                      },
                      k && H
                    )
                  }),
                q.base64 &&
                  o.default.createElement(x, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: q.base64,
                    spreadProps: P,
                    imageVariants: W,
                    generateSources: R
                  }),
                q.tracedSVG &&
                  o.default.createElement(x, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: q.tracedSVG,
                    spreadProps: P,
                    imageVariants: W,
                    generateSources: L
                  }),
                this.state.isVisible &&
                  o.default.createElement(
                    "picture",
                    null,
                    E(W),
                    o.default.createElement(V, {
                      alt: a,
                      title: t,
                      sizes: q.sizes,
                      src: q.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: q.srcSet,
                      style: C,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: v,
                      loading: w,
                      draggable: I
                    })
                  ),
                this.addNoScript &&
                  o.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: O(
                        (0, l.default)({ alt: a, title: t, loading: w }, q, {
                          imageVariants: W
                        })
                      )
                    }
                  })
              );
            }
            if (m) {
              var j = m,
                M = p(m),
                G = (0, l.default)(
                  {
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block",
                    width: M.width,
                    height: M.height
                  },
                  n
                );
              return (
                "inherit" === n.display && delete G.display,
                o.default.createElement(
                  S,
                  {
                    className: (r || "") + " gatsby-image-wrapper",
                    style: G,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(M.srcSet)
                  },
                  T &&
                    o.default.createElement(S, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, l.default)(
                        {
                          backgroundColor: T,
                          width: M.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: M.height
                        },
                        k && H
                      )
                    }),
                  M.base64 &&
                    o.default.createElement(x, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: M.base64,
                      spreadProps: P,
                      imageVariants: j,
                      generateSources: R
                    }),
                  M.tracedSVG &&
                    o.default.createElement(x, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: M.tracedSVG,
                      spreadProps: P,
                      imageVariants: j,
                      generateSources: L
                    }),
                  this.state.isVisible &&
                    o.default.createElement(
                      "picture",
                      null,
                      E(j),
                      o.default.createElement(V, {
                        alt: a,
                        title: t,
                        width: M.width,
                        height: M.height,
                        sizes: M.sizes,
                        src: M.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: M.srcSet,
                        style: C,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: v,
                        loading: w,
                        draggable: I
                      })
                    ),
                  this.addNoScript &&
                    o.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: O(
                          (0, l.default)({ alt: a, title: t, loading: w }, M, {
                            imageVariants: j
                          })
                        )
                      }
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(o.default.Component);
      k.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy"
      };
      var C = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string
        }),
        T = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
          maxWidth: u.default.number,
          maxHeight: u.default.number
        });
      function H(e) {
        return function(t, a, r) {
          var i;
          if (!t.fixed && !t.fluid)
            throw new Error(
              "The prop `fluid` or `fixed` is marked as required in `" +
                r +
                "`, but their values are both `undefined`."
            );
          u.default.checkPropTypes((((i = {})[a] = e), i), t, "prop", r);
        };
      }
      k.propTypes = {
        resolutions: C,
        sizes: T,
        fixed: H(u.default.oneOfType([C, u.default.arrayOf(C)])),
        fluid: H(u.default.oneOfType([T, u.default.arrayOf(T)])),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool
      };
      var N = k;
      t.default = N;
    },
    ClGB: function(e, t, a) {
      "use strict";
      var r = a("Wbzz"),
        i = a("q1tI"),
        n = a.n(i),
        s = a("9eSz"),
        d = a.n(s);
      t.a = function(e) {
        var t = e.title,
          a = e.background,
          i = e.children;
        return n.a.createElement(
          "div",
          { class: "splash-title" },
          n.a.createElement(d.a, { fluid: a }),
          n.a.createElement(
            BackgroundImage,
            {
              Tag: "section",
              className: className,
              fluid: a,
              backgroundColor: "#040e18"
            },
            n.a.createElement("h2", null, "gatsby-background-image")
          ),
          n.a.createElement(
            "center",
            null,
            n.a.createElement(
              "div",
              { class: "splash-console" },
              n.a.createElement(
                "h1",
                { class: "splash-title-header" },
                n.a.createElement(r.Link, { to: "/" }, t)
              ),
              n.a.createElement("p", { class: "splash-title-subheader" }, i)
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-1134ce17169cf898bf80.js.map
