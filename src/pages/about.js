import { graphql } from "gatsby";
import React from "react";
import Content from "../components/content";
import Main from "../components/main";
import SEO from "../components/seo";
import SplashTitle from "../components/splash-title";

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const displayTitle = "About this blog" //+ siteTitle

  return (
    <Main siteTitle={siteTitle}>
      <SplashTitle title={displayTitle}>
      </SplashTitle>
      <SEO title="About" />
      <Content>
        <p><strong>noface(book)</strong> is the incarnation of my <i>boundless disillusionment</i> as a woman of color in tech and UX. Here, you can find my thoughts and references as I connect the dots between tech, society, and justice with a focus on racial justice, feminism, environmentalism, and privacy.</p>

        <p>You can also find some of my old rants on <a href="https://tinyletter.com/noface/archive">Newsletters from Noface.</a></p>

        <p>I've also started compiling some resources on direct action, mental health, and education in <a href="https://docs.google.com/spreadsheets/d/18Zu8QXYrdrXfuZCZkk3NF_rO7Fh6xDbETgpkKjWhn2o/edit?usp=sharing">this google spreadsheet</a>.</p>
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
