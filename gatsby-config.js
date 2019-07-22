module.exports = {
  siteMetadata: {
    title: `RAWGraphs`,
    description: `The missing link between spreadsheets and data visualization.`,
    author: `@rawgraphs`,

    learningCategories: ["introduction", "charts", "data"],
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // `gatsby-remark-images`,
          // `gatsby-remark-copy-images`,
          "gatsby-remark-attr",
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              // as we assume you'll use gatsby-remark-images to handle
              // images in markdown as it automatically creates responsive
              // versions of images.
              //
              // If you'd like to not use gatsby-remark-images and just copy your
              // original images to the public directory, set
              // `ignoreFileExtensions` to an empty array.
              ignoreFileExtensions: [],
            },
          },

          "gatsby-remark-autolink-headers",

          // not really used right now, remove?
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                smallImage: {
                  classes: "small-image",
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-excerpts",
      options: {
        sources: {
          default: {
            type: "htmlQuery",
            sourceField: "html",
            excerptSelector: "html > *",
            ignoreSelector: "img, .gatsby-highlight, iframe",
            stripSelector: "a",
            elementReplacements: [
              // {
              //     "selector": "h6",
              //     "replaceWith": "strong"
              // },
              // {
              //     "selector": "h5",
              //     "replaceWith": "h6"
              // },
              // {
              //     "selector": "h4",
              //     "replaceWith": "h5"
              // },
              // {
              //     "selector": "h3",
              //     "replaceWith": "h4"
              // },
              // {
              //     "selector": "h2",
              //     "replaceWith": "h3"
              // },
            ],
            truncate: {
              length: 80,
              byWords: true,
              ellipsis: "…",
            },
          },
        },
        sourceSets: {
          markdownHtml: ["default"],
        },
        excerpts: {
          snippet: {
            type: "html",
            nodeTypeSourceSet: {
              MarkdownRemark: "markdownHtml",
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-5816319-7",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
