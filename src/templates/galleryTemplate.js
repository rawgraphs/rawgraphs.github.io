import React from "react"
// import { graphql } from "gatsby"
import { Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
 

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  

  return (
    
    <Layout>
    <SEO title={frontmatter.title} />
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-8">
          <h2>{frontmatter.title}</h2>
          <div>
            by {frontmatter.submitted_by}
          </div>
          <div
            className={"blog-post-content"}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div>
            <img className="img-responsive" src={frontmatter.image.publicURL} style={{maxWidth:'100%'}}></img>
          </div>
        </div>
        <div className="col-md-4">

        </div>

      </div>
      
    </div>
  </Layout>)
    
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        categories
        submitted_by
        tags
        reading_time
        image {
          publicURL
        }
      }
    }
  }`