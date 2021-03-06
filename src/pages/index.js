import { graphql, Link } from "gatsby";
import React from "react";
import Content from "../components/content";
import Main from "../components/main";
import SEO from "../components/seo";
import SplashTitle from "../components/splash-title";

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Main siteTitle={siteTitle}>
      <SplashTitle title={siteTitle}>       
        <p class="splash-text">a.k.a. no fac(ial recognition technology under our neoliberal regim)e</p>
      </SplashTitle>
      <SEO title="All posts" />
      <Content>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h2>
                  <Link to={node.fields.slug}>{title}</Link>
                </h2>
              </header>
              <section style={{ marginBottom: `2rem` }}>
                <p class="detail">{node.frontmatter.date}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </section>
            </article>
          );
        })}
      </Content>
    </Main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            published
          }
        }
      }
    }
  }
`;
