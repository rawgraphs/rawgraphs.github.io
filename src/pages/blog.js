import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBlock from "../components/blog-block"
// import { graphql } from 'gatsby'

const BlogPage = ({data}) => {

  return <Layout>
    <SEO title="Blog" />
    
    <div className="container py-5">
      <h1>Blog</h1>
      <p className="lead">A place to share news and updates about the RAW Graphs project.</p>
    </div>
    <div className="bg-light py-4">
      <div className="container">
        <div className="row">
        { data.allMarkdownRemark.edges.map(edge => (
          <BlogBlock node={edge.node} key={edge.node.frontmatter.path}/>
        ))}
        </div>
      </div>
      
    </div>
    
    
  </Layout>
}

export default BlogPage

export const query = graphql`
query {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: 1000
  ) {
    edges {
      node {
        frontmatter {
          title
          path
          date
          categories
          author
          image {
            publicURL
          }
        }
        html
        snippet
      }
    }
  }
}

`