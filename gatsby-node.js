/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const get = require("lodash/get")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const learningTemplate = path.resolve(`src/templates/learningTemplate.js`)
  const galleryTemplate = path.resolve(`src/templates/galleryTemplate.js`)

  const getTemplate = frontmatter => {
    // If path starts with /learning it's a learning article
    // If it has a "submitted_by" attribute it's gallery
    // Otherwise it's a blog post
    const path = get(frontmatter, "path")
    if (path.indexOf("/learning") === 0) {
      return learningTemplate
    } else if (frontmatter.layout === "gallery_project") {
      return galleryTemplate
    } else {
      return blogPostTemplate
    }
  }

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
              layout
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    let pages = result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: getTemplate(node.frontmatter),
        context: {}, // additional data can be passed via context
      })
    })

    // Create blog-list pages
    const posts = result.data.allMarkdownRemark.edges.filter(
      x => get(x, "node.frontmatter.layout") !== "gallery_project"
    )
    const postsPerPage = 9
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blogListTemplate.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    return pages
  })
}
