import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AskInfo from "../components/AskInfo"
import styles from "./gallery.module.scss"

const GalleryPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const edges = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Gallery" />
      <div className="container">
        <div className="row main-header">
          <div className="col-12 col-sm-8">
            <div>
              <h1 className="big">Gallery</h1>
              <h2 className="light">
                <p>A place to showcase the best examples of RAWGraphs in use</p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <AskInfo
        question="Have you done something interesting with RAWGraphs?"
        button="submit!"
        link="/tobedone"
        bgLight
      ></AskInfo>

      <div className="grey-bg container-fluid">
        <div className="container">
          <div className="row">
            {edges.map(edge => (
              <div
                className="col-6 col-sm-4 col-md-3 mb-5"
                key={edge.node.frontmatter.path}
              >
                <Link to={edge.node.frontmatter.path} as="div">
                  <div className={styles.project}>
                    <img
                      alt={edge.node.frontmatter.title}
                      className="img-fluid"
                      src={edge.node.frontmatter.image.publicURL}
                    ></img>
                    <div className={`${styles.info} d-none d-md-flex`}>
                      <h2>{edge.node.frontmatter.title}</h2>
                      <p className="small">
                        {edge.node.frontmatter.submitted_by}
                      </p>
                    </div>
                  </div>
                  {/*                  <div className="d-block d-md-none">
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p className="small">
                      {edge.node.frontmatter.submitted_by}
                    </p>
                  </div>*/}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AskInfo
        question="Do you want to contribute to the project? Any general question or feedback?"
        button="contact us"
        link="mailto:hello@rawgraphs.io"
      ></AskInfo>
    </Layout>
  )
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
      filter: { frontmatter: { layout: { eq: "gallery_project" } } }
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
