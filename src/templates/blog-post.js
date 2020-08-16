import { graphql, Link } from "gatsby";
import * as React from "react";
import Content from "../components/content";
import Main from "../components/main";
import SEO from "../components/seo";
import SplashTitle from "../components/splash-title";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const post = data.markdownRemark;

  return (
    <Main siteTitle={siteTitle}>
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
        </article>

        <nav>
          <Link to={`/`}>← Back</Link>
        </nav>
      </Content>
    </Main>
  );
};

export default BlogPostTemplate;

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
        featuredImage {
          childImageSharp {
            fluid(
              cropFocus: CENTER
              traceSVG: { color: "#000" }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
