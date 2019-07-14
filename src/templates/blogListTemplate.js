import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBlock from "../components/blog-block"
import range from 'lodash/range'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const BlogPage = ({data, pathContext}) => {

  const { numPages, currentPage } = pathContext
  

  return <Layout>
    <SEO title="Blog" />
    
    <div className="container py-5">
      <h1>Blog</h1>
      <p className="lead">A place to share news and updates about the RAW Graphs project.</p>
    </div>
    <div className="bg-light py-4">
      <div className="container">
        <div className="row">
        { data.allMarkdownRemark.edges.map(edge => (
          <BlogBlock node={edge.node} key={edge.node.frontmatter.path}/>
        ))}
        </div>
      </div>


      {/* pagination */}
      {numPages > 1 && <div className="d-flex flex-row justify-content-center mt-5"><Pagination aria-label="Page navigation example">
        { range(numPages).map(page => (
          <PaginationItem key={page} active={currentPage === page + 1}>
            <PaginationLink href={`/blog/${page === 0 ? '' : page + 1}`}>
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination></div>}
    
      
    </div>

    
    
  </Layout>
}

export default BlogPage

export const pageQuery = graphql`
query blogListQuery($skip: Int!, $limit: Int!){
  allMarkdownRemark(
    filter: {frontmatter: {layout: {ne: "gallery_project"}}}
    sort: { order: DESC, fields: [frontmatter___date] }
    limit: $limit
    skip: $skip
  ) {
    edges {
      node {
        frontmatter {
          title
          path
          date
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