import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./blogTemplate.module.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { image } = frontmatter
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className={`container ${styles.post}`}>
        <div className="row my-5">
          <div className="col-sm-8 offset-sm-2 text-center">
            <h3 className="text-uppercase green-text">
              {frontmatter.categories[0]}
            </h3>
            <h1>{frontmatter.title}</h1>
            <p className="small">
              {frontmatter.date}, by {frontmatter.author}
            </p>
          </div>
        </div>
        <div className="row">
          {image && (
            <div className="col-sm-10 offset-sm-1">
              <img
                className="img-fluid img-thumbnail"
                alt={frontmatter.title}
                src={image.publicURL}
              ></img>
            </div>
          )}
          <div className="col-sm-10 offset-sm-1">
            <div
              className={styles.contentBox}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        path
        title
        author
        categories
        image {
          publicURL
        }
      }
    }
  }
`
