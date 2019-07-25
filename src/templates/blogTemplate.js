import React from "react"
import { Link, graphql } from "gatsby"
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DiscoverMoreWidgetPost from "../components/DiscoverMoreWidgetPost"
import styles from "./blogTemplate.module.scss"

export default function Template({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { image } = frontmatter

  const defaultWidgets = [
    {
      title: "RAWgraphs is open",
      subtitle: "do you want to hack RAWGraphs or install it locally?",
      link: "https://github.com/densitydesign/raw/",
    },
    {
      title: "About RAWGraphs",
      subtitle: "Everything you need to know about the project.",
      link: "/about",
    },
  ]

  const widgets = frontmatter.widgets ? frontmatter.widgets : defaultWidgets

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
            <hr />
            <p className={styles.tags}>
              Tags:{" "}
              {frontmatter.tags.map(tag => (
                <Link key={tag} to="/">
                  {tag}
                </Link>
              ))}
            </p>
            <hr />
            <div className={styles.share}>
              <FacebookShareButton url={location.href} className="mr-2">
                <FacebookIcon size={32} round={false} />
              </FacebookShareButton>
              <TwitterShareButton
                url={location.href}
                title={frontmatter.title}
                hashtags={["rawgraphs"]}
              >
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid grey-bg">
        <div className="container">
          <div className="row">
            {widgets.map((widget, index) => (
              <DiscoverMoreWidgetPost
                key={index}
                {...widget}
              ></DiscoverMoreWidgetPost>
            ))}
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
        tags
        widgets {
          title
          subtitle
          link
        }
        image {
          publicURL
        }
      }
    }
  }
`
