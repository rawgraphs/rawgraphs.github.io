import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBlock from "../components/blog-block"
import groupBy from 'lodash/groupBy'
import get from 'lodash/get'
import { Link } from 'gatsby'

const GalleryPage = ({data}) => {
  const { site , allMarkdownRemark} = data
  const edges = allMarkdownRemark.edges
  const { siteMetadata} = site
  const bySubCategory = groupBy(edges, 'node.frontmatter.subCategory')
  // const subcats = Object.keys(bySubCategory).map(k => )

  

  return <Layout>
    <SEO title="Gallery" />
    
    <div className="container py-5">
      <h1>Gallery</h1>
      <p className="lead">A place to showcase the best examples of RAWGraphs in use.</p>
    </div>
    <div className="bg-light py-4">
      <div className="container">
        <div className="row">
        {edges.map(edge => <div className="col-md-3" key={edge.node.frontmatter.path} ><Link to={edge.node.frontmatter.path} as="div">
          <h4>{edge.node.frontmatter.title}</h4>
          <h6>{edge.node.frontmatter.submitted_by}</h6>
          <img className="img-thumbnail" src={edge.node.frontmatter.image.publicURL}></img>
        </Link></div>)}
        </div>
        
      </div>
      
    </div>
    
    
  </Layout>
}

export default GalleryPage

export const query = graphql`
query {
  site {
    siteMetadata {
      learningCategories
    }
  }
  allMarkdownRemark(
    filter : {
      frontmatter: { layout: { eq: "gallery_project" } }
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
          categories
          submitted_by
          image {
            publicURL
          }
          tags
        }
        html
        snippet
      }
    }
  }
}

`