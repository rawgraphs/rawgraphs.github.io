import React from "react"
import { FaArrowCircleRight } from "react-icons/fa"
import styles from "./partner.module.scss"

const Partner = ({ name, description, link, linkLabel, logo }) => {
  return (
    <div className={`col-md-6`}>
      <div className={`${styles.partner}`}>
        <div className={`row`}>
          <div className="col-6 offset-3 col-sm-3 offset-sm-0">
            <img className="img-fluid" alt={name} src={logo} />
          </div>
          <div className="col-12 col-sm-9">
            <h3>{name}</h3>
            <p className="small">{description}</p>
            <hr />
            <a href={link} target="_blank" rel="noopener noreferrer">
              <span className="mr-2">{linkLabel}</span>
              <FaArrowCircleRight></FaArrowCircleRight>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
