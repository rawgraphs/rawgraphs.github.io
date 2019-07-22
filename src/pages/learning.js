import React from "react"
import { FaRegClock } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import get from "lodash/get"
import { Link } from "gatsby"
import styles from "./learning.module.scss"

const LearningPage = ({ data }) => {
  const { site, allMarkdownRemark } = data
  const edges = allMarkdownRemark.edges
  const { siteMetadata } = site

  const bySubCategory = siteMetadata.learningCategories.reduce(
    (bySubCategory, item) => {
      bySubCategory[item] = edges.filter(edge => {
        const categories = get(edge, "node.frontmatter.categories", []).map(x =>
          x.toLowerCase()
        )
        return categories.indexOf(item.toLowerCase()) !== -1
      })
      return bySubCategory
    },
    {}
  )

  return (
    <Layout>
      <SEO title="Learning" />

      <div className="container">
        <div className="row main-header">
          <div className="col-12 col-sm-8">
            <div>
              <h1 className="big">Learning</h1>
              <h2 className="light">
                <p>
                  Quick reference guides for learning how to use and how to hack
                  RAW Graphs.
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grey-bg">
        <div className="container">
          {siteMetadata.learningCategories.map(k => (
            <div className="row" key={k}>
              <div className="col-md-3">
                <h1>{k}</h1>
              </div>
              <div className="col-md-9">
                {get(bySubCategory, k, []).map((edge, i) => (
                  <div className={styles.guide} key={i}>
                    <div>
                      <Link to={edge.node.frontmatter.path}>
                        <h2 className="light m-0">
                          {edge.node.frontmatter.title}
                        </h2>
                      </Link>
                    </div>
                    <div className="ml-auto">
                      <p className="small d-flex align-items-center m-0">
                        <FaRegClock></FaRegClock>{" "}
                        <span className="ml-2">
                          {edge.node.frontmatter.reading_time} min.
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default LearningPage

// eslint-disable-next-line
export const query = graphql`
  query {
    site {
      siteMetadata {
        learningCategories
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            layout
            categories
            reading_time
            author
          }
          html
          snippet
        }
      }
    }
  }
`
