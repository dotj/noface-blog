import { graphql, Link } from "gatsby"
import * as React from "react"
import Content from "../components/content"
import Main from "../components/main"
import SEO from "../components/seo"
import SplashTitle from "../components/splash-title"


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Main location={location} title={siteTitle}>
      <header>
        <SplashTitle
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          background={post.frontmatter.featuredImage.childImageSharp.fluid}
        >
          {post.frontmatter.description}
        </SplashTitle>
      </header>
      <Content>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr/>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Content>
    </Main>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        icon
        featuredImage {
          childImageSharp {
            fluid(cropFocus: CENTER, maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
