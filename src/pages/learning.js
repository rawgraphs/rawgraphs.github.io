import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBlock from "../components/blog-block"

const LearningPage = ({data}) => {

  return <Layout>
    <SEO title="Learning" />
    
    <div className="container py-5">
      <h1>Learning</h1>
      <p className="lead">Quick reference guides for learning how to use and how to hack RAW Graphs.</p>
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

export default LearningPage

export const query = graphql`
query {
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

`