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
        category
        subCategory
        tags
        time
        steps {
          title
          href
        }
      }
    }
  }`