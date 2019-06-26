import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BlogBlock = ({ node }) => {

  const { html, snippet} = node
  // grabbing images from html..
  const el = document.createElement( 'html' );
  el.innerHTML = html
  const images = el.getElementsByTagName( 'img' ); // Live NodeList of your anchor elements

  return (<div className="col-md-12 p-3 border mb-3 bg-white">
    {/* <Link to={node.frontmatter.path} className="no-link-color"> */}
      <div className="row" onClick={() => navigate(node.frontmatter.path)}>
        {images.length > 0 && <div className="col-md-6">
          <div style={{
            minHeight: 300,
            backgroundImage: `url(${images[0].src})`, backgroundSize:'cover', backgroundPosition:'center'}} className="h-100">
            
          </div>
        </div>}
        <div className="col-md-6 d-flex flex-column justify-space-between">
          <div>
            <b className="text-uppercase text-primary">{node.frontmatter.category}</b>
            <h1>{node.frontmatter.title}</h1>
            <div
              // className={styles.blogPostContent}
              dangerouslySetInnerHTML={{ __html: snippet }}
            />
          </div>
          <div>
            <hr/>
            <p className="small">{node.frontmatter.date}, by {node.frontmatter.author}</p>
          </div>
          
        </div>

      </div>
      
    {/* </Link> */}

  </div>)
}

 

export default BlogBlock
