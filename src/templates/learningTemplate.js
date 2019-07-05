import React from "react"
// import { graphql } from "gatsby"
import { Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
 

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { steps, resources } = frontmatter

  return (
    
    <Layout>
    <SEO title={frontmatter.title} />
    <div className="container pb-5">
      <div className="learning-post-container">
        <div className="row">
         {steps && <div className="col-md-3 d-none d-md-block">
            {steps && <div className="position-fixed"><small>
              <b className="text-primary">STEPS</b>
              <div>
                { steps.map((step, i) => (
                  <div key={i}>
                    {i+1}. <a href={`${step.href}`}>{step.title}</a>
                  </div>
                ))}
              </div>
            </small></div>}
          </div>}
          
          
          <div className="col-md-9">
            <div className="learning-post">
            <div className="text-left">
              <h6 className="text-primary text-uppercase">
                <Link to={frontmatter.category}>{frontmatter.category}</Link>
               &gt;{frontmatter.subCategory} </h6>
              <h1>{frontmatter.title}</h1>
              {(frontmatter.tags || frontmatter.time) && <div className="mb-4">
                  <span className="mr-2">{frontmatter.time}</span>
                  {frontmatter.tags && frontmatter.tags.map((tag, i) => (
                    <span className="badge badge-primary mr-1" key={i}>&nbsp;{tag}</span>
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
        steps {
          title
          href
        }
      }
    }
  }`;