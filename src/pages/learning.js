import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBlock from "../components/blog-block"
import groupBy from 'lodash/groupBy'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'

const LearningPage = ({data}) => {
  const { site , allMarkdownRemark} = data
  const edges = allMarkdownRemark.edges
  const { siteMetadata} = site
  const bySubCategory = groupBy(edges, 'node.frontmatter.subCategory')
  // const subcats = Object.keys(bySubCategory).map(k => )

  

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
                    {edge.node.frontmatter.time}
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

export const query = graphql(`
query {
  site {
    siteMetadata {
      learningCategories
    }
  }
  allMarkdownRemark(
    filter : {
      frontmatter: { category: { eq: "learning" } }
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
          category
          subCategory
          time
          author
          
        }
        html
        snippet
      }
    }
  }
}

`)