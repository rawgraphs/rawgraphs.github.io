import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBlock from "../components/blog-block"
import get from 'lodash/get'
import { Link } from 'gatsby'

const LearningPage = ({data}) => {
  const { site , allMarkdownRemark} = data
  const edges = allMarkdownRemark.edges
  const { siteMetadata} = site
  // const subcats = Object.keys(bySubCategory).map(k => )
  console.log("123", siteMetadata.learningCategories)

  const bySubCategory = siteMetadata.learningCategories.reduce((bySubCategory, item) => {
    bySubCategory[item] = edges.filter(edge => {
      const categories = get(edge, 'node.frontmatter.categories', []).map(x => x.toLowerCase())
      return categories.indexOf(item.toLowerCase()) !== -1
    })
    return bySubCategory
  }, {})

  console.log("bySubCategory", bySubCategory)

  return <Layout>
    <SEO title="Learning" />
    
    <div className="container py-5">
      <h1>Learning</h1>
      <p className="lead">Quick reference guides for learning how to use and how to hack RAW Graphs.</p>
    </div>
    <div className="bg-light py-4">
      <div className="container">
        {siteMetadata.learningCategories.map(k => (
          <div className="row" key={k}>
            <div className="col-4">
              {k}
            </div>
            <div className="col-8">
              {get(bySubCategory, k, []).map(edge=> (
                <div className="row">
                  <div className="col">
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </div>
                  <div className="col">
                    {edge.node.frontmatter.reading_time} min.
                  </div>
                </div>
              ))}
            </div>
          
        </div>))}
      </div>
      
    </div>
    
    
  </Layout>
}

export default LearningPage

export const query = graphql`
query {
  site {
    siteMetadata {
      learningCategories
    }
  }
  allMarkdownRemark(
    filter : {
      frontmatter: { layout: { eq: "post" } }
    }
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          title
          path
          date
          layout
          categories
          reading_time
          author
        }
        html
        snippet
      }
    }
  }
}

`