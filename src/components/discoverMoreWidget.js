import React from "react"
import styles from "./discoverMoreWidget.module.scss"
import { FaArrowCircleRight } from "react-icons/fa"

const DiscoverMoreWidget = ({ title, description, link, linkLabel }) => (
  <div className={`col-md-6`}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={`${styles.item}`}>
        <h2>{title}</h2>
        <p className="small">{description}</p>
        <p className="small d-flex align-items-center">
          <span className="mr-2">{linkLabel} </span>
          <FaArrowCircleRight></FaArrowCircleRight>
        </p>
      </div>
    </a>
  </div>
)

export default DiscoverMoreWidget
