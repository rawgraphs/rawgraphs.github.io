import React from "react"
import { Link } from "gatsby"
import styles from "./discoverMoreWidgetPost.module.scss"
import { FaArrowCircleRight } from "react-icons/fa"

const DiscoverMoreWidgetPost = ({ title, subtitle, link }) => {
  const internal = /^\/(?!\/)/.test(link)

  return (
    <div className={`col-md-6`}>
      {internal ? (
        <Link to={link}>
          <div className={`${styles.item}`}>
            <div>
              <p className="small text-uppercase">{subtitle}</p>
              <h2>{title}</h2>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <FaArrowCircleRight></FaArrowCircleRight>
            </div>
          </div>
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className={`${styles.item}`}>
            <div>
              <p className="small text-uppercase">{subtitle}</p>
              <h2>{title}</h2>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <FaArrowCircleRight></FaArrowCircleRight>
            </div>
          </div>
        </a>
      )}
    </div>
  )
}

export default DiscoverMoreWidgetPost
