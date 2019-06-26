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
      <div className="learning-post-container">
        <div className="learning-post">
          <div className="text-left">
            <h6 className="text-primary text-uppercase">{frontmatter.category} &gt;{frontmatter.subCategory} </h6>
            <h1>{frontmatter.title}</h1>
            {(frontmatter.tags || frontmatter.time) && <div>
                {frontmatter.time}
                {frontmatter.tags && frontmatter.tags.map((tag, i) => (
                  <span key={i}>&nbsp;{tag}</span>
                )) }
            </div>}
          </div>
          <div
            className={"learning-post-content"}
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
        category
        subCategory
        tags
        time
      }
    }
  }`