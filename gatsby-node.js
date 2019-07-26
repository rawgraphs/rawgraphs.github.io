/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const get = require("lodash/get")
const groupBy = require("lodash/groupBy")

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

  const getPostType = frontmatter => {
    // If path starts with /learning it's a learning article
    // If it has a "submitted_by" attribute it's gallery
    // Otherwise it's a blog post
    const path = get(frontmatter, "path")
    if (path.indexOf("/learning") === 0) {
      return 'learning'
    } else if (frontmatter.layout === "gallery_project") {
      return 'gallery'
    } else {
      return 'blog'
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
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const nodesByType = groupBy(result.data.allMarkdownRemark.edges, edge => getPostType(edge.node.frontmatter))
  
    let blogPages = get(nodesByType, 'blog', []).map(({ node }) => {
      return createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })

    const galleryNodes= get(nodesByType, 'gallery', [])
    
    let galleryPages = galleryNodes.map(({ node }, i) => {
      return createPage({
        path: node.frontmatter.path,
        component: galleryTemplate,
        context: {
          nextPage: i < galleryNodes.length - 1 ? {path: galleryNodes[i+1].node.frontmatter.path, title:  galleryNodes[i+1].node.frontmatter.title} : undefined, 
          prevPage: i > 0 ? {path: galleryNodes[i-1].node.frontmatter.path, title: galleryNodes[i-1].node.frontmatter.title} : undefined
        }, // additional data can be passed via context
      })
    })

    let learningPages = get(nodesByType, 'learning', []).map(({ node }) => {
      return createPage({
        path: node.frontmatter.path,
        component: learningTemplate,
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


    return {blogPages, galleryPages,  learningPages}
  })
}
