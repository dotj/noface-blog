module.exports = {
  siteMetadata: {
    title: 'noface(book)',
    description:
      'A personal blog on tech and equity',
    author: '@dotj',
  },
  pathPrefix: "/noface-blog",
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:300,300i,400,400i`,
          `Inconsolata\:200,300,400`,
          `Fira Code:\:300,400`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              footnoteBackRefInnerText: "^", // Defaults to: "↩"
              //use if you want the Wikipedia style ^ link without an underline beneath it
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              //use "front" for Wikipedia style ^ links
              footnoteBackRefInnerTextStartPosition: "front",
              useFootnoteMarkerText: false // Defaults to false
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: false,
              tracedSVG: false
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'content/assets/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    }
  ],
}
