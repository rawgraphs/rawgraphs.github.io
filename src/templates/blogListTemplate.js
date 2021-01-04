import React from "react"
import { graphql } from "gatsby"
import range from "lodash/range"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBlock from "../components/blog-block"
import AskInfo from "../components/AskInfo"

const BlogPage = ({ data, pageContext }) => {
  const { numPages, currentPage } = pageContext

  return (
    <Layout>
      <SEO title="Blog" />

      <div className="container">
        <div className="row main-header">
          <div className="col-12 col-sm-8">
            <div>
              <h1 className="big">Blog</h1>
              <h2 className="light">
                <p>
                  A place to share news and updates about the RAW Graphs
                  project.
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid grey-bg">
        <div className="container">
          <div className="row">
            {data.allMarkdownRemark.edges.map((edge, i) => (
              <BlogBlock
                node={edge.node}
                key={edge.node.frontmatter.path}
                size={
                  currentPage === 1
                    ? i === 0
                      ? "normal"
                      : i === 1
                      ? "normal"
                      : "normal"
                    : "normal"
                }
              />
            ))}
          </div>
        </div>

        {/* pagination */}
        {numPages > 1 && (
          <div className="d-flex flex-row justify-content-center mt-5">
            <Pagination aria-label="Page navigation example">
              {range(numPages).map(page => (
                <PaginationItem key={page} active={currentPage === page + 1}>
                  <PaginationLink href={`/blog/${page === 0 ? "" : page + 1}`}>
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </Pagination>
          </div>
        )}
      </div>
      <AskInfo
        question="Do you want to contribute to the project? Any general question or feedback?"
        button="contact us"
        link="mailto:hello@rawgraphs.io"
      ></AskInfo>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { ne: "gallery_project" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM Do, YYYY")
            categories
            author
            image {
              publicURL
            }
          }
          html
          snippet
          excerpt
        }
      }
    }
  }
`
