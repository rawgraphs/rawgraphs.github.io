import { Link } from "gatsby"
import React from "react"
import styles from "./blog-block.module.scss"

const BlogBlockBig = ({ node }) => {
  const { excerpt, frontmatter } = node
  const { image } = frontmatter
  return (
    <div className={`col-md-12 mb-4`}>
      <div className={styles.blogPost}>
        <div className="row">
          {image && (
            <div className="d-none d-sm-block col-md-8 col-sm-12">
              <div
                className={styles.thumbnail}
                style={{
                  backgroundImage: `url(${image.publicURL})`,
                }}
              ></div>
            </div>
          )}
          <div className={`col-md-4 col-sm-12 ${styles.content}`}>
            <div className={styles.inner}>
              <p className="text-uppercase green-text">
                {node.frontmatter.categories[0]}
              </p>
              <Link to={node.frontmatter.path}>
                <h1>{node.frontmatter.title}</h1>
              </Link>
              <div
                className="d-none d-md-block"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
            </div>
            <div className="mt-auto">
              {image && (
                <div
                  className={`${styles.thumbnailNormal} d-block d-md-none`}
                  style={{
                    backgroundImage: `url(${image.publicURL})`,
                  }}
                ></div>
              )}
              <hr />
              <p className="small mb-0">
                {node.frontmatter.date}, by {node.frontmatter.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const BlogBlockMedium = ({ node }) => {
  const { excerpt, frontmatter } = node
  const { image } = frontmatter
  return (
    <div className={`col-md-8 mb-4`}>
      <div className={styles.blogPost}>
        <div className="row">
          <div className={`col-md-6 col-sm-12 ${styles.content}`}>
            <div className={styles.inner}>
              <p className="text-uppercase green-text">
                {node.frontmatter.categories[0]}
              </p>
              <Link to={node.frontmatter.path}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <div
                className="d-none d-md-block"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
            </div>
            <div className="mt-auto">
              {image && (
                <div
                  className={`${styles.thumbnailNormal} d-block d-md-none`}
                  style={{
                    backgroundImage: `url(${image.publicURL})`,
                  }}
                ></div>
              )}
              <hr />
              <p className="small mb-0">
                {node.frontmatter.date}, by {node.frontmatter.author}
              </p>
            </div>
          </div>
          {image && (
            <div className="d-none d-md-block col-md-6">
              <div
                className={styles.thumbnail}
                style={{
                  backgroundImage: `url(${image.publicURL})`,
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
const BlogBlockNormal = ({ node }) => {
  const { frontmatter } = node
  const { image } = frontmatter
  return (
    <div className={`col-sm-6 col-md-4 mb-4`}>
      <div className={styles.blogPost}>
        <div className="row h-100">
          <div className={`col-12 ${styles.content}`}>
            <div className={styles.inner}>
              <p className="text-uppercase green-text">
                {node.frontmatter.categories[0]}
              </p>
              <Link to={node.frontmatter.path}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
            </div>
            <div className="mt-auto">
              {image && (
                <div
                  className={styles.thumbnailNormal}
                  style={{
                    backgroundImage: `url(${image.publicURL})`,
                  }}
                ></div>
              )}
              <hr />
              <p className="small mb-0">
                {node.frontmatter.date}, by {node.frontmatter.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogBlock = ({ node, size }) => {
  if (size === "big") {
    return <BlogBlockBig node={node}></BlogBlockBig>
  } else if (size === "medium") {
    return <BlogBlockMedium node={node}></BlogBlockMedium>
  } else {
    return <BlogBlockNormal node={node}></BlogBlockNormal>
  }
}

BlogBlock.defaultProps = {
  size: "normal",
}

export default BlogBlock
