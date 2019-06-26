import React from "react"
import { graphql } from "gatsby"

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
    <div className="container">
      <div className="blog-post-container">
        <div className="blog-post">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">{frontmatter.category}</h6>
            <h1>{frontmatter.title}</h1>
            <p className="small">{frontmatter.date}, by {frontmatter.author}</p>
          </div>
          <div
            className={"blog-post-content"}
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
        author
        category
      }
    }
  }`