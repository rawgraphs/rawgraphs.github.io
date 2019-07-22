import React from "react"
import styles from "./askInfo.module.scss"

const AskInfo = ({ question, button, link, bgLight }) => (
  <div
    className={`container-fluid ${styles.askInfo} ${bgLight ? "bg-light" : ""}`}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-9">
          <h3>{question}</h3>
        </div>
        <div className="col-sm-3">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-default btn-larger">{button}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default AskInfo
