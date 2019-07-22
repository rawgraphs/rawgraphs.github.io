import React from "react"
import { Link } from "gatsby"
import { FaRegClock, FaTags } from "react-icons/fa"
import YoutubeEmbed from "../components/youtubeEmbed"
import GuideCitation from "../components/guideCitation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import get from "lodash/get"
import styles from "./learningTemplate.module.scss"

export default function Template({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { files } = frontmatter

  const domparser = new DOMParser()
  var doc = domparser.parseFromString(html, "text/html")
  const headings = doc.querySelectorAll("h1, h2, h3, h4, h5")

  let headingsSteps = []
  headings.forEach(heading => {
    const s = {
      href: `#${heading.id}`,
      title: heading.innerText,
    }
    headingsSteps.push(s)
  })
  const steps = [
    {
      href: "#article-start",
      title: "Intro",
    },
  ]
    .concat(headingsSteps)
    .concat([
      {
        href: "#how-to-cite-this-guide",
        title: "How to cite this guide",
      },
    ])

  const breadcrumbs = frontmatter.categories.map(d => {
    const elm = {
      link:
        d.toLowerCase() === "learning"
          ? "/learning"
          : "/learning#" + d.toLowerCase(),
      label: d,
    }
    return elm
  })

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="container py-5">
        <div className="row">
          {(steps || files) && (
            <div className="col-md-3 d-none d-md-block">
              <div className={styles.learningNav}>
                {steps && (
                  <div>
                    <h4 className="text-uppercase mt-0">steps</h4>
                    {steps.map((step, i) => (
                      <div className={styles.navElement} key={i}>
                        <a href={`${step.href}`}>{step.title}</a>
                      </div>
                    ))}
                  </div>
                )}
                {files && (
                  <div>
                    <b className="text-primary">RESOURCES</b>
                    <div>
                      {files.map((file, i) => (
                        <div key={i}>
                          <a href={`${file.href.publicURL}`}>{file.title}</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="col-md-9">
            <div className={styles.learningHeader}>
              <h4 className="text-uppercase">
                {breadcrumbs.map((breadcrumb, index) => (
                  <React.Fragment key={index}>
                    <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
                    {breadcrumbs.length - 1 !== index && (
                      <span className="mx-1">></span>
                    )}
                  </React.Fragment>
                ))}
              </h4>
              <h1 id="article-start">{frontmatter.title}</h1>
              {(frontmatter.tags || frontmatter.time) && (
                <p className="d-flex align-items-center">
                  <FaRegClock></FaRegClock>
                  <span className="ml-2 mr-3">
                    {frontmatter.reading_time} min.
                  </span>
                  <FaTags></FaTags>
                  {frontmatter.tags &&
                    frontmatter.tags.map((tag, i) => (
                      <span className="mx-2" key={i}>
                        {tag}
                      </span>
                    ))}
                </p>
              )}
              {frontmatter.discover_more_description && (
                <h2 className="light">
                  {frontmatter.discover_more_description}
                </h2>
              )}
              {frontmatter.featured_video && (
                <div className={styles.videoThumbnail}>
                  <YoutubeEmbed url={frontmatter.featured_video}></YoutubeEmbed>
                </div>
              )}
              {!frontmatter.featured_video && frontmatter.image && (
                <img
                  className="img-fluid img-thumbnail"
                  src={frontmatter.image.publicURL}
                  alt={frontmatter.title}
                ></img>
              )}
            </div>
            <div className={styles.learningContent}>
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
              <h3 id="how-to-cite-this-guide">How to cite this guide</h3>
              <GuideCitation
                title={frontmatter.title}
                url={location.href}
              ></GuideCitation>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// eslint-disable-next-line
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        categories
        tags
        reading_time
        featured_video
        discover_more_description
        image {
          publicURL
        }
        files {
          title
          href {
            publicURL
          }
        }
      }
    }
  }
`
