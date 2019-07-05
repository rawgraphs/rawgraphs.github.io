/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const get = require('lodash/get');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const learningTemplate = path.resolve(`src/templates/learningTemplate.js`)

  const getTemplate = (frontmatter) => {
    const categories = get(frontmatter, 'categories', []).map(x => x.toLowerCase());
    const isLearning = categories.indexOf('learning') !== -1;
    if(isLearning){
      return learningTemplate
    }
    return blogPostTemplate
  }

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              category
              subCategory
              author
              date
              
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: getTemplate(node.frontmatter),
        context: {}, // additional data can be passed via context
      })
    })
  })
  
}