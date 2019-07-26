import React from "react"
import { Link, graphql } from "gatsby"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa"
import AskInfo from "../components/AskInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./galleryTemplate.module.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { prevPage, nextPage } = pageContext

  return (
    <Layout>
      <SEO title={frontmatter.title} />
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
        link="https://forms.gle/WnqxUfwnE3nVt58RA"
        bgLight
      ></AskInfo>
      <div className="container-fluid grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <div>
                <img
                  className="img-fluid"
                  src={frontmatter.image.publicURL}
                  alt={frontmatter.title}
                ></img>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 d-flex flex-column">
              <div>
                <h2>{frontmatter.title}</h2>
                <div className={styles.gallery}>
                  <h4 className="text-uppercase green-text">submitted by</h4>
                  <p>
                    {frontmatter.author_personal_page[0] ? (
                      <a
                        href={frontmatter.author_personal_page}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {frontmatter.submitted_by}
                      </a>
                    ) : (
                      <span>{frontmatter.submitted_by}</span>
                    )}
                  </p>
                </div>
                <div className={`${styles.gallery} ${styles.description}`}>
                  <h4 className="text-uppercase green-text">description</h4>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <div className={`${styles.gallery}`}>
                  <h4 className="text-uppercase green-text">charts used</h4>
                  <p className="small">
                    {frontmatter.visual_models_used.join(", ")}
                  </p>
                </div>
                {frontmatter.external_link[0] && (
                  <div className={`${styles.gallery}`}>
                    <h4 className="text-uppercase green-text">external link</h4>
                    <p className="small">
                      <a
                        href={frontmatter.external_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Project page
                      </a>
                    </p>
                  </div>
                )}
              </div>

              <div className={styles.navigation}>
                {prevPage && (
                  <Link to={prevPage.path}>
                    <FaArrowCircleLeft></FaArrowCircleLeft>
                  </Link>
                )}
                <Link to="/gallery">Back to the gallery</Link>
                {nextPage && (
                  <Link to={nextPage.path}>
                    <FaArrowCircleRight></FaArrowCircleRight>
                  </Link>
                )}
              </div>
            </div>
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
        date(formatString: "MMMM DD, YYYY")
        path
        title
        submitted_by
        author_personal_page
        visual_models_used
        external_link
        image {
          publicURL
        }
      }
    }
  }
`
